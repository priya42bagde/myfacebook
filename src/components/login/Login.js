import { LocalGasStation } from "@material-ui/icons";

import "./Login.css"

import React from 'react'

function Login() {
    return (
        <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Social</h3>
               <span  className="loginDesc">
                   Connect with friends and the world around you.
               </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                  <input placeholder="Email" className="loginInput"/>
                  <input placeholder="Password" className="loginInput"/>
                  <button className="LogInButton">Log In</button>
                  <span className="loginForgot"> Forgot Password?</span>
                  <button className="loginRegisterButton">Create a New account</button>
              </div>
            </div>
        </div>
            
        </div>
    )
}

export default Login
