import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import './Login.css'
import insta from '../Assets/Instagram.jpg'
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link, useHistory} from  'react-router-dom';
import bg from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
import img5 from '../Assets/img5.jpg';
import { AuthContext } from '../Context/AuthContext';
import { useContext, useState } from 'react';

export default function Login() {
    const store = useContext(AuthContext);
    //console.log(store);
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        text2:{
            textAlign:'center'
        },
        text3:{
            color:'grey',
            textAlign:'center',
            verticalAlign: 'middle'
        },
        card2:{
            height:'5vh',
            marginTop:'2%'
        }
    })
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {login} = useContext(AuthContext);
  
    const handleLogin = async() => {
        try{
            setError('');
            setLoading(true);
            let user = await login(email, password);
            setLoading(false);
            //console.log(user);
            history.push('/');
        }
        catch(error){
            setError(error);
            setTimeout(() => {setError('');}, 4000);
            setLoading(false);
        }
        
    }

    return (
        <div className="loginWrapper">
          <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
              <div className="car">
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={5}
                    // step={3}
                    naturalSlideWidth={238}
                    naturalSlideHeight={423}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                >
                    <Slider>
                    <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
                    </Slider>
                </CarouselProvider>
              </div>
        </div>
        <div className="loginCard">
            <Card variant="outlined">
                <div className="insta-logo">
                    <img src={insta} alt="" />
                </div>
                <CardContent>
                    {error != '' && <Alert severity="error">{error}</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Typography className={classes.text2} color="primary" variant="subtitle1">
                        Forget Password ?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={handleLogin}>
                    Log in
                    </Button>
                </CardActions>
            </Card>
            <Card variant="outlined" className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text3} variant="subtitle1" >
                        Don't have an account ? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
                    </Typography>
                </CardContent>
            </Card>
          </div>
        </div>
    
  );
}

//mene ye wala kiya tha  

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

// import './Login.css';
// import insta from '../Assets/Instagram.jpg';
// import { makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { grey } from '@mui/material/colors';
// import Alert from '@mui/material/Alert';
// import TextField from '@mui/material/TextField';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import {Link} from "react-router-dom";

// export default function MultiActionAreaCard() {
//     const useStyles = makeStyles({
//         text1 : {
//             color : 'grey',
//             textAlign: 'center'
//         }
//     })
//     const classes = useStyles();
//     return (
//       <div className = "loginWrapper">
//           <div className = "loginCard">
//             <Card  variant = "outlined">
//                 <div className = "insta-logo">
//                     <img src = {insta}/>
//                 </div>
//                 <CardContent>
                  
//                 </CardContent>
//             </Card>
//             <Card>
//                 <Typography className = {classes.text1} variant="subtitle1">
//                     Having an account ? <Link to = "/login">Login</Link>
//                 </Typography>
//             </Card>
//           </div>
//           <div className = "loginCard">
//             <Card  variant = "outlined">
//                 <div className = "insta-logo">
//                     <img src = {insta}/>
//                 </div>
//                 <CardContent>
//                     <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense'/>
//                     <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense'/>
//                 </CardContent>
//                 <CardActions>
//                     <Typography className={classes.text1} variant="subtitle1">
//                         <Link to = "/forgetPasswod"> Forget Password ? </Link>
//                     </Typography>
//                 </CardActions>
//                 <CardActions>
//                     <Button color="primary" variant="contained" fullWidth={true}>
//                     LOG IN
//                     </Button>
//                 </CardActions>
//             </Card>
//             <Card>
//                 <Typography className = {classes.text1} variant="subtitle1">
//                     Don't have an account? <Link to = "/Signup">Sign up</Link>
//                 </Typography>
//             </Card>
//           </div>
//       </div>
    
//   );
// }
