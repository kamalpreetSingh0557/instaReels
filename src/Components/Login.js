import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './Login.css';
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
      <div className = "loginWrapper">
          <div className = "loginCard">
            <Card  variant = "outlined">
                <div className = "insta-logo">
                    <img src = {insta}/>
                </div>
                <CardContent>
                  
                </CardContent>
            </Card>
            <Card>
                <Typography className = {classes.text1} variant="subtitle1">
                    Having an account ? <Link to = "/login">Login</Link>
                </Typography>
            </Card>
          </div>
          <div className = "loginCard">
            <Card  variant = "outlined">
                <div className = "insta-logo">
                    <img src = {insta}/>
                </div>
                <CardContent>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense'/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense'/>
                </CardContent>
                <CardActions>
                    <Typography className={classes.text1} variant="subtitle1">
                        <Link to = "/forgetPasswod"> Forget Password ? </Link>
                    </Typography>
                </CardActions>
                <CardActions>
                    <Button color="primary" variant="contained" fullWidth={true}>
                    LOG IN
                    </Button>
                </CardActions>
            </Card>
            <Card>
                <Typography className = {classes.text1} variant="subtitle1">
                    Don't have an account? <Link to = "/Signup">Sign up</Link>
                </Typography>
            </Card>
          </div>
      </div>
    
  );
}
