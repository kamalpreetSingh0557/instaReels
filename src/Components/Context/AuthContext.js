// import React, {useState, useEffect} from 'react';
// export const AuthContext = React.createContext();
// import {auth} from '../firebase';

// export function AuthProvider(){
//     const [user, setUser] = useState();
//     const [loading, setLoading] = useState(true);

//     function signup(email, password){
//         return auth.createUserWithEmailAndPassword(email, password);
//     }

//     function login(email, password){
//         return auth.signInWithEmailAndPassword(email, password);
//     }
    
//     function logout(){
//         return auth.signOut()
//     }

//     useEffect(() => {  // state changing functions
//         const unsub = auth.onAuthStateChanged((user) => {
//             setUser(user);
//             setLoading(false);
//         })
//         return () => {
//             unsub();
//         }
//     },[]);


// }