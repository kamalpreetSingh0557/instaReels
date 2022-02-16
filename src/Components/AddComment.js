import React,{useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { database } from '../firebase';

function AddComment({userData, postData}){
    const [text, setText] = useState('');

    const handleComment = () => {
        let obj = {
            uName : userData.fullname,
            uProfileImage: userData.profileURL,
            text : text,
        }

        // .then mein "doc" mein comment object ayega usse Id lelenge
        database.comments.add(obj).then((commentObj) =>{
            database.posts.doc(postData.postId).update({
                // console.log(doc.id),
                comments : [...postData.comments, commentObj.id]
            })
        })
        setText('');
    }

    return(
        <div style={{width:'100%'}}>
            <TextField id="outlined-basic" label="Comment" size='small' sx={{width:'70%'}} variant="outlined" value={text} onChange={(e)=>setText(e.target.value)} />
            <Button onClick={handleComment} variant="contained">Post</Button>
        </div>
    )
}

export default AddComment;

//Wrong Method

// function AddComment({userData, postData}){
//     const [comment, setComment] = useState('')
    
//     // useEffect(()=>{
//     //     let check = posts.comments.includes(userData.userId) ? true : false ;
//     //     setComments(check);
//     // },[postData]);

//     const addComment = () => {
//         if(comment != " "){
//             {postData.comments != null ? [...postData.comments, comment]:[comment]};
//         }else{
//             return;
//         }
//     }

//     return(
//         <div style={{width:'100%'}}>
//             <TextField id="outlined-basic" label="Comment" size='small' sx={{width:'70%'}} variant="outlined" onChange={(e)=>setComment(e.target.value)} />
//             <Button onClick={addComment} variant="contained">Post</Button>
//         </div>
//     )
// };