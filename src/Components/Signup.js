import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './Signup.css';
import insta from '../Assets/Instagram.jpg';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {useState, useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import {database, storage} from '../firebase';
// In react-router-dom v6 useHistory() is replaced by useNavigate()
// import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const useStyles = makeStyles({
        text1 : {
            color : 'grey',
            textAlign: 'center'
        },
        card2:{
            height : '5vb',
            marginTop : "2%" 
        }
    })

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    //const history  = useNavigate();
    const {signup} = useContext(AuthContext);

    const handleClick = async() => {
        if(file == null){
            setError("Please upload profile image");

            setTimeout(() => {
                setError('');
            }, 4000);
            return;
        }

        try{
            setError('');
            setLoading(true);
            let userObj = await signup(email, password);
            let uid = userObj.user.uid;
            console.log(uid);
            const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
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
                    database.users.doc(uid).set({
                        email: email,
                        userId : uid,
                        fullname : name,
                        profileURL : url,
                        createdAt : database.getTimeStamp()
                    })
                })
                setLoading(false);
                history.push('/');
            }
        }
        catch(error){
            console.log(error);
            setError(error);

            setTimeout(() => {
                setError('');
            }, 4000);
        }
    }

    return (
      <div className = "signupWrapper">
          <div className = "signupCard">
            <Card  variant = "outlined">
                <div className = "insta-logo">
                    <img src = {insta}/>
                </div>
                <CardContent>
                    <Typography className = {classes.text1} variant="subtitle1" >
                        Sign up to see photos and videos from your friends
                    </Typography>
                    { error!='' && <Alert severity="error">{error}</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin='dense'value={name} onChange={(e) => setName(e.target.value)}/>
                </CardContent>
                <CardActions>
                    <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label">
                    Upload Profile Image {/* component = "label agr nhi hoga button pe to image upload nhi ho rhi thi pta nhi kyun */}
                    <input type ="file" accept="image/*" hidden onChange={(e) => setFile(e.target.files[0])}/>
                    </Button>
                </CardActions>
                <CardActions>
                    <Button color="primary" variant="contained" fullWidth={true} onClick={handleClick}>
                    Signup
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography className ={classes.text1} variant ="subtitle1">
                    By signing up, you agree to our Terms, Conditions and Cookies policy.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <Typography className = {classes.text1} variant="subtitle1">
                    Having an account ? <Link to = "/login">Login</Link>
                </Typography>
            </Card>
          </div>
      </div>
    
  );
}


/*
    Dear Team,
    I was shorlisted for interview with infosys campus recruitment for System Engineer role but my interview was not conducted it's been 2 months since i have been reaching TalentAcquisition team despite repeated reminders there is no response from their side 
    Can you please look into this matter
    Below are my details : 
    Interview Date : Tuesday,23 Nov 2021 :  Time :- 15:20
    email ID : kamalpreetsingh0557@gmail.com
*/

/* INFY TQ 
Website: https://infytq.onwingspan.com/en/page/home Certification info and registration link:
https://infytq.onwingspan.com/en/page/lex_auth_0132039837575168000 Learning Content:
https://infytq.onwingspan.com/en/page/lex_auth_0132224288888094723 Mock Assessments:
https://infytq.onwingspan.com/en/page/lex_auth_0132318608099737607 -> here participants need to take up the final Round mock assessment of respective language for HON practice FAQs:
https://infytq.onwingspan.com/en/page/lex_auth_0132224289973780484 Exam guidelines available in InfyTQ
website: https://infytq.onwingspan.com/public-assets/InfosysCertificationExaminationGuidelines.pdf
*/
