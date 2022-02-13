import React,{useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddComment(){
    const [comments, setComments] = useState('');
    return(
        <div style={{width:'100%'}}>
            <TextField id="outlined-basic" label="Comment" size='small' sx={{width:'70%'}} variant="outlined" onChange={(e)=>setComments(e.target.value)} />
            <Button variant="contained">Post</Button>
        </div>
    )
};

export default AddComment;