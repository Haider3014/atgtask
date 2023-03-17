import React from 'react'
import "./Home.css"

function Home() {
    return (
        <>
            <div className=" home" style={{"width":"100%"}}>
                <img src={require("../assests/Rectangle 2.png")} class="img-fluid bannerimg" alt="..." />
                <div className="bannertext">
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
                <button type="button" className="d-none jnbtn">Join Group</button>
            </div>
        </>
    )
}

export default Home