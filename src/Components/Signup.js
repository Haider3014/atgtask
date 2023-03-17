import {React,useState,useEffect} from 'react'
import Navbar from './Navbar'
import "./Signup.css"

function Signup() {
return (
    <>
      <div className="container-fluid">
        <div className='container signuptrigger'>
          {/* <button type="button"  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup">
          </button> */}


          <div className="modal fade" id="signup" tabIndex="-1" aria-labelledby="Sign"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="textbox">
                    <p className="text1">Let's learn, share & inspire each other with our passion for computer
                      engineering. Sign up now 🤘🏼</p>
                    <button type="button" className="btn-close cbtn" data-bs-dismiss="modal" aria-label="Close">

                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="sides">
                    <div className="leftside">
                      <h2 className="createacc">Sign Up</h2>
                      <div className="credentials">
                        <input className="cred" type="email" placeholder="Email" />
                        <input className="cred" type="Password" placeholder="Password" />
                        <span><img className="eyeimg" src={require("../assests/Group 3.png")} /></span>
                      </div>
                      <button type="button" className="btn btn-primary createbtn">Create Account</button>
                      <button type="button" className="btn btn-outline fbutton"><img
                        src={require("../assests/f_logo_RGB-Blue_1024.png")} alt="flogo" />Sign up with
                        Facebook</button>
                      <button type="button" className="btn btn-outline gbtn"><img
                        src={require("../assests/search.png")} alt="glogo" />Sign up with Google</button>

                      <a className="fpass" href="/" target="_blank">Forgot Password?</a>
                    </div>
                    <div className="rightside">
                      <p className="signup"> Don't have an account yet? <a
                         data-bs-toggle="modal" data-bs-target="#Login" className="sulink"><span style={{"color":"#2F6CE5","cursor":"pointer"}}>Create new for free!</span></a></p>
                      <img className="atgl" src={require("../assests/atg_illustration.png")} alt="pic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  )
}
export default Signup