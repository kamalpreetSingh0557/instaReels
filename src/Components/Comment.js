import React,{useState, useEffect} from 'react';
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';

function Comment({postData}){
    // console.log(postData);
    // console.log(postData.postId);
    // console.log(postData.comments);

    const [comments, setComments] = useState(null);
    
    useEffect(async()=>{
            let arr = []
            for(let i=0;i<postData.comments.length;i++){
                let data = await database.comments.doc(postData.comments[i]).get()
                arr.push(data.data())
            }
            setComments(arr)
    },[postData])

    // VVImp 
    // https://reactjs.org/docs/lists-and-keys.html#keys
    return(
        <div style={{width:'100%'}}>
            {
                comments==null? <CircularProgress/> :
                <>
                {
                    comments.map((comment,index)=>(
                        <div style={{display:'flex'}}>
                            <Avatar src={comment.uProfileImage}/>
                            <p>&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>{comment.uName}</span>&nbsp;&nbsp; {comment.text}</p>
                        </div>
                    ))
                }
                </>
            }
            
            {/*
             
                {comments == null ? 'No Comments yet' :
                    <>
                    {
                        comments.map((comment, index)=>(
                        <div>{comment.text}</div>    
                        ))
                    }
                    </>
                } 
            */}
        </div>
    )
}

export default Comment;