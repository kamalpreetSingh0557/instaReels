import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import UploadFile from './UploadFile';
import {database} from '../firebase'
import Posts from './Posts';

function Feed(){
    const {user, logout} = useContext(AuthContext);
    //console.log(user);
    const[userData, setUserData] = useState('');

    // ye useEffect isliye likha because humein 
    // UploadFile.js mein "handleUpload" function mein "uploadTask" ke "fn3" means jb file/post upload ho jaye to Cloud Database mein add
    // krne ke liye post mein user chaiye tha users Database.
    // Therefore, user[users Database wala] nikalne ke ;iye useEffect likha 
    // And use props ke through UploadFIle mein bhej rhe hai 
  
    // useEffect(async()=>{
    //     let res = await database.users.doc(user.uid).get();
    //     console.log(res.data());
    // }, []);
  
    //jb bhi 'user' (ki state) mein koi change hoga to ye useEffect dubara chlega
    // because maan lo ki nye User ne login kr liya to wo purane user se onSnapshot(kind of EventListener) remove krdega

    useEffect(()=>{    
        const unsub = database.users.doc(user.uid).onSnapshot((doc)=>{
            // console.log(doc);
            // console.log(doc.data());
            setUserData(doc.data())  //Undefined deta hai
        })
        return ()=> {unsub()}
    },[user]);

    return(
        <>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection:'column'}}>
                {/*flexDirection : 'column' se LogOut button nextLine pe aa gya*/}
            <h1>Welcome to Feed</h1>
            <button onClick={logout}>Logout</button>
            <UploadFile user={userData}/> 
            <Posts user={userData} />
            </div>
        </>
    )
}

export default Feed;