import React from 'react';
import axios from 'axios';
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
  Container,
} from 'react-bootstrap'

 class Register extends React.Component{
  constructor(props){
    super(props)
    this.registerUser = this.registerUser.bind(this)
  }
 
  state = {
    data : [{
      name: " ",
      mobileNumber: " ",
      emaiId: " ",
      password: " ",
      confirmPassword:" "
    }
   ],
  }

  render(){
  return( 
    <div className="base-container">
      <div className="header"> Register </div>
      <div className="content">
        <div classname="image">
        </div>
        <Form className="form" onSubmit={this.registerUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="userName" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="userPassword" placeholder="password" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="userEmail" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="email">mobileNumber</label>
            <input type="text" name="mobileNumber" placeholder="test" />
          </div>
          <div className="form-group">
            <label htmlFor="email">confirmpassword</label>
            <input type="text" name="confirmpassword" placeholder="email" />
          </div>
          <div className="footer">
          <button >Click me</button>

          </div>
        </Form>
      </div>

    </div>
  );

  }
  registerUser(event) {
    alert("hello");

    let userName = event.target.userName.value
    alert(userName)
    let mobileNumber = parseInt(event.target.mobileNumber.value)
    let userEmail = event.target.userEmail.value
    let userPassword = event.target.userPassword.value
    let confirmpassword = event.target.confirmpassword.value
    

    const userObj = {}
    userObj['name'] = userName
    userObj['mobileNumber'] = mobileNumber
    userObj['emaiId'] = userEmail
    userObj['password'] = userPassword
    userObj['confirmPassword'] = confirmpassword

    const user = JSON.stringify(userObj)
    alert(user)
    let data = new FormData()
    data.append(
      'user',
      new Blob([user], {
        type: 'application/json',
      }),
    )
    let url = 'http://localhost:8080/registerUser'
    alert(url)
    const requestOptions = {
      method: 'POST',
      header:{ 'content-type' : 'application/json'},
      body: data,
    }
    axios.post('http://localhost:8080/registerUser', requestOptions)
      .then(response => response.json()) 
      .catch((err) => {
        alert('error in registration',err)
      })
  }
}
export default Register;

