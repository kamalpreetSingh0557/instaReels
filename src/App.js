import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
// import {Link} from "react-router-dom"; iske liye import kiya hai neeche
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

import {AuthContext, AuthProvider} from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute'

function App() {
  // therefore app ko ismein wrap krna hoga
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <PrivateRoute path="/" component={Feed}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>

    // <BrowserRouter>
    //   <AuthProvider>
    //     <Routes> 
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route path="/" element={<Feed />} />
    //     </Routes> 
    //   </AuthProvider>
    // </BrowserRouter>
  );
}

export default App;
