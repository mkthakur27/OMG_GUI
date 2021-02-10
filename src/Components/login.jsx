import React from 'react';
import {
  NavLink,
  Route,
  Redirect,
  Switch,
  BrowserRouter,
  Link,
  Router,
} from 'react-router-dom';
//import '../scss/login.scss'

export class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return( 
    <div className="base-container">
      <div className="header"> Login </div>
      <div className="content">
        <div classname="image">
          {/* <img src ={loginImage} /> */}
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className ="btn">
          Login
        </button>
        </div>
        <div className="signup">
        <Link to="/register" className="nav-link" href="#">
              if not login register now
        </Link>
      </div>
    </div>
    );
  }
}



export default Login;