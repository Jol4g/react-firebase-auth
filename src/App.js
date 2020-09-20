import React, { useEffect,  } from 'react';
import fire from './config/Fire';

import './App.css';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import { Switch} from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';

function App() {
// //states
//  const [user, setUser] = useState({})

function authListener() {
  fire.auth().onAuthStateChanged((user)=>{
    // console.log(user);
    if(user){
      // setUser(user);
      localStorage.setItem('user',user.uid) ;
    } else {
      // setUser(null);
      localStorage.removeItem('user')
    }
  })
};

//did mount like
  useEffect(
    ()=>{
authListener();
    }
  ,[])

  return (
    <div className="App">
     <Switch>
    <PublicRoute restricted={true} exact path='/' component={Login}/>
    <PrivateRoute exact path='/home' component={Home}/>   
       </Switch> 
    </div>
  );
}

export default App;
