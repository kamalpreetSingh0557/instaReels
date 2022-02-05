import { Button } from '@mui/material';
import React, {useContext, useState} from 'react';
import Alert from '@mui/material/Alert';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@mui/material/LinearProgress';
import {AuthContext} from '../Context/AuthContext';
import { database, storage } from '../firebase';
import {v4 as uuidv4} from 'uuid'


function UploadFile(props){
    console.log(props.user);
    const[error, setError] = useState('');
    const[loading, setLoading] = useState(false);
    //const[file, newFile] = useState();

    const handleUpload = async(file) => {
        //console.log('handleUpload runs');
        console.log(file.name);
        if(file == null){
            setError('No file selected');
            setTimeout(() => {
                setError('');
            },4000);
            return;
        }
        if(file.size/(1024*1024)>100){
            setError('File size is larger than 100Mb');
            setTimeout(() => {
                setError('');
            },4000);
            return;
        }

        // Library imoprt kri hai unique id's dene ke liye
        let uid = uuidv4();
        setLoading(true);
        const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log(`Upload is ${progress} done.`)
        }
        function fn2(error){
            console.log(error);
            setError(error);

            setTimeout(() => {
                setError('');
            }, 4000);
            setLoading(false);
            return;
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
                let obj = {
                    likes:[],
                    comments:[],
                    pId:uid,
                    pUrl:url,
                    uName: props.user.fullname,
                    uProfile: props.user.profileURL,
                    userId: props.user.userId,
                    createdAt: database.getTimeStamp()
                }
                database.posts.add(obj).then(async(ref)=>{
                    //console.log(ref);
                    //"users" collection mein user ke andar postIds field daal rhe hain 
                    let res = await database.users.doc(props.user.userId).update({
                        postIds: props.user.postIds != null ? [...props.user.postIds, ref.id] : [ref.id] //doubt in ref, ref.id
                    })
                }).then(()=>{
                    setLoading(false);
                }).catch((error)=>{
                    setError(error);
                    setTimeout(()=>{
                        setError('')
                    },4000);
                    setLoading(false);
                })
            })
        }
    }

    return(
        <div>
            {
                error != '' ? <Alert severity="error">{error}</Alert>  
                :
                <>
                    <label htmlFor = 'upload-input'>
                        <input id='upload-input' type='file' accept='video/*' onChange={(e) => handleUpload(e.target.files[0])} hidden />
                        <Button 
                            variant='outlined'
                            color='secondary'
                            component='span'
                            disabled={loading}
                        >
                            <MovieIcon/>&nbsp;Upload Video
                        </Button>
                    </label>
                        {loading && <LinearProgress color="secondary" style={{marginTop:'2%'}} />}
                   
                </>
            }
        </div>
    )
}

export default UploadFile;