import  React, {useState, useEffect, useContext} from 'react';
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video';
import './Posts.css';
import Avatar from '@mui/material/Avatar';
import Like from './Like';

function Posts(props){
    const [posts, setPosts] = useState(null);
    // {/*console.log(props.user.profileURL);*/}
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