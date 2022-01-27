import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Signup';
import Login from './Components/Login';

// import {Link} from "react-router-dom"; iske liye import kiya hai neeche
import {BrowserRouter} from 'react-router-dom';

function App() {
  // therefore app ko ismein wrap krna hoga
  return (
    <BrowserRouter>
      <SignUp />
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
