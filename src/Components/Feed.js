import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Feed(){
    const {logout} = useContext(AuthContext);
    // const handleLogout = async() => {
    //     await logout();
    // }

    return(
        <>
           <h1>Welcome to Feed</h1>
           <button onClick={logout}>Logout</button>
        </>
    )
}

export default Feed;