import React from 'react'
import "./Login.css"

function Login() {
    return (
        <>
            <div className="container-fluid">
                <div className='container'>
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Login">
                    </button> */}
                    <div className="modal fade" id="Login" tabindex="-1" aria-labelledby="Login"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="textbox">
                                        <p className="text1">Let's learn, share & inspire each other with our passion for computer
                                            engineering. Sign up now 🤘🏼</p>
                                        <button type="button" className="btn-close cbtn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <div className="sides">
                                        <div className="leftside">
                                            <h2 className="createacc">Create Account</h2>
                                            <div className="names d-flex">
                                                <input className="name" type="text" placeholder="First Name" />
                                                <input className="name" type="text" placeholder="Last Name" />
                                            </div>
                                            <div className="credentials">
                                                <input className="cred" type="email" placeholder="Email" />
                                                <input className="cred" type="Password" placeholder="Password" />
                                                <span><img className="eyeimg" src={require("../assests/Group 3.png")} /></span>
                                                <input className="cred" type="Password" placeholder="Confirm Password" />
                                            </div>
                                            <button type="button" className="btn btn-primary createbtn">Create Account</button>
                                            <button type="button" className="btn btn-outline fbutton"><img
                                                src={require("../assests/f_logo_RGB-Blue_1024.png")} alt="flogo" />Sign up with
                                                Facebook</button>
                                            <button type="button" className="btn btn-outline gbtn"><img
                                                src={require("../assests/search.png")} alt="glogo" />Sign up with Google</button>
                                        </div>
                                        <div className="rightside">
                                            <p className="signin"> Already have an account?
                                                <a data-bs-toggle="modal" data-bs-target="#signup"><span style={{ "color": "#2F6CE5","cursor":"pointer" }} >Sign In</span></a></p>
                                            <img className="atgl" src={require("../assests/atg_illustration.png")} alt="pic" />
                                            <p className="endline">By signing up, you agree to our Terms & conditions, Privacy
                                                policy</p>
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

export default Login