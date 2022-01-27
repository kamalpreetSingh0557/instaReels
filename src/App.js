import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Signup';
import Login from './Components/Login';

// import {Link} from "react-router-dom"; iske liye import kiya hai neeche
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

function App() {
  // therefore app ko ismein wrap krna hoga
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
