import { LocalGasStation } from "@material-ui/icons";

import "./Registration.css"

import React from 'react'

function Registration() {
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
                  <input placeholder="Username" className="loginInput"/>
                  <input placeholder="Email" className="loginInput"/>
                  <input placeholder="Password" className="loginInput"/>
                  <input placeholder="Confirm Password" className="loginInput"/>
                  <button className="LogInButton">Sign Up</button>
                 
                  <button className="loginRegisterButton">Log into Account</button>
              </div>
            </div>
        </div>
            
        </div>
    )
}

export default Registration
