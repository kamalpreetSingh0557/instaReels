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
import {Link} from "react-router-dom";

export default function MultiActionAreaCard() {
    const useStyles = makeStyles({
        text1 : {
            color : 'grey',
            textAlign: 'center'
        }
    })
    const classes = useStyles();
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
                    {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense'/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense'/>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin='dense'/>
                </CardContent>
                <CardActions>
                    <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} >
                    Upload Profile Image
                    <input type ="file" accept="image/*" hidden/>
                    </Button>
                </CardActions>
                <CardActions>
                    <Button color="primary" variant="contained" fullWidth={true}>
                    Share
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
