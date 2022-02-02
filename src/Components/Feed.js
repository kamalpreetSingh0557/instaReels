import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import UploadFile from './UploadFile';

function Feed(){
    const {logout} = useContext(AuthContext);
    // const handleLogout = async() => {
    //     await logout();
    // }

    return(
        <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection:'column'}}>
            {/*flexDirection : 'column' se LogOut button nextLine pe aa gya*/}
           <h1>Welcome to Feed</h1>
           <button onClick={logout}>Logout</button>
           <UploadFile />
        </div>
    )
}

export default Feed;