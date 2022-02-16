import  React, {useState, useEffect, useContext} from 'react';
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video';
import './Posts.css';
import Avatar from '@mui/material/Avatar';
import Like from './Like';
//Chat Icon MUI import
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// Imports for ChatIcon ke click pe modal khule
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
//
//Comment Modal ke liye chats likhne ke liya "CARD MUI" import kiya
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
//
import Like2 from './Like2';
import AddComment from './AddComment';
import Comment from'./Comment';

function Posts(props){
    const [posts, setPosts] = useState(null);
    // {/*console.log(props.user.profileURL);*/}

    // Chat Icon ke click pe form/Modal aa jaaye
    // Problem ye thi ki "open" ki value true/false ho skti thi, so jb bhi hm modal open krne ke liye icon pe click krte,
    // then open = true ho jata to jitni bhi posts hai unke modals open ho jaate the but we want ki,
    // jis post ka icon click krein usi ka modal khule 
    const [open, setOpen] = useState(null);

    const handleClickOpen = (id) => {
      setOpen(id);
    };
  
    const handleClose = () => {
      setOpen(null);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
    //
    useEffect(()=>{
        let postArr = [];
        const unsub = database.posts.orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
            postArr = [];
            querySnapshot.forEach((doc)=>{
                //console.log(doc);
                //console.log(doc.data());
                //console.log(doc.id);   
                let data = {...doc.data(), postId:doc.id};
                postArr.push(data);
            }) 
            setPosts(postArr);
        }) 
        return unsub; 
    }, [])
    return(
        <>
            {
                posts==null || props.user==null ? <CircularProgress /> : 
                <div className='video-container'>
                    {
                        posts.map ((post, index)=>(
                            <React.Fragment key={index}>
                                <div className="videos">
                                    <Video src={post.pUrl}/> 
                                    <div className="fa" style={{display:'flex'}}>
                                        <Avatar src={props.user.profileURL} /> 
                                        <h4>{props.user.fullname}</h4>
                                    </div>
                                    <Like userData={props.user} postData={post} />
                                    <ChatBubbleIcon className='chat-icon' onClick={()=>handleClickOpen(post.pId)}/>
                                    <Dialog
                                        open={open==post.pId}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                        fullWidth = {true}
                                        maxWidth = 'md'
                                    >
                                        <div className='modal-container' >
                                            <div className='video-modal'>
                                                <video muted="muted" controls> 
                                                    <source src={post.pUrl} />
                                                </video>
                                            </div>
                                            <div className='comment-modal'>
                                                <Card className='card1' sx={{ maxWidth: 345 }}>
                                                    <Comment postData={post} />
                                                </Card>

                                                <Card className='card2' variant="outlined">
                                                   <Typography style={{padding: '0.4rem'}}>{post.likes.length == 0 ? "" : `Liked by ${post.likes.length} users`}</Typography>
                                                   <div style={{display : 'flex'}}>
                                                        <Like2 userData={props.user} postData={post} style={{display:'flex', alignItems:'center', justifyContent:'center', padding: '1rem', paddingTop: '0.5rem'}} />
                                                        <AddComment userData={props.user} postData={post}/>
                                                        
                                                   </div>
                                                </Card>
                                            </div>
                                        </div>                                        
                                    </Dialog>
                                </div>
                            </React.Fragment>
                        ))  
                    }
                </div>

            }
        </>
    )
}

export default Posts;

// { // VVVVImp
// posts.map(()=>())     // This works [React mein aise likte hain]
//     Not
// posts.map(()=>{})     // This not Works
// }