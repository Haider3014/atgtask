import { React } from 'react'
import "./Main.css"

function Main() {
    return (
        <div className="container d-flex  flex-column " >
            <div className="container d-flex  flex-column border-2 " >
                <div className="container ">
                    <ul className='lists '>
                        <li className='list one'>All Posts(32)</li>
                        <li className=' androidpost d-none'> Posts(368)</li>
                        <li className='list two'>Article</li>
                        <li className='list three'>Event </li>
                        <li className='list four'>Education</li>
                        <li className='list five'>Job</li>
                        <li>
                            <div className="buttons">
                                <button type='button' className='btn post'>Write a Post  <span><img src={require('../assests/Vector (1).png')}alt="..."></img></span></button>
                                <button type="button" className='androidbtn d-none'>Filter All <img src={require('../assests/Vector (1).png')}alt="..."></img></button>
                                <button type='button' className='btn join'><img src={require('../assests/Join.png')}alt="..."></img><span> Join Group</span></button>
                            </div>
                        </li>
                    </ul>
                    <div className="hline"></div>
                    <div className="hline2"></div>
                </div>
                <div className="container-fluid d-flex mt-4 ms-4 align-items-start flex-column">
                    <div class="card  bigcards">
                        <img src={require('../assests/Rectangle 5.png')} class="card-img-top" alt="..." />
                        <p className="Article">✍️ Article</p>
                        <div class="card-body">
                            <img className={"dots"} src={require('../assests/Vector (5).png')}alt="..."></img>
                            <h5 class="card-title">What if famous brands had regular fonts? Meet<br />RegulaBrands!</h5>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

                        </div>
                        <div class="card-footer">
                            <img className='dp' src={require('../assests/Rectangle 3.png')} alt='dp' />
                            <p className='profilename'>Sarthak Kamra</p>
                            <img className="eye" src={require('../assests/Group 3.png')} alt='views' />
                            <p className='views'>1.4k views</p>
                            <button type="button" className='share'><img src={require('../assests/Vector (4).png')}alt="..." /></button>

                        </div>
                    </div>
                    <div class="card bigcards">
                        <img src={require('../assests/Card2.png')} class="card-img-top" alt="..." />
                        <p className="Article">🔬️ Education</p>
                        <div class="card-body">
                            <img className={"dots"} src={require('../assests/Vector (5).png')}alt="..."></img>
                            <h5 class="card-title">Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h5>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

                        </div>
                        <div class="card-footer">
                            <img className='dp' src={require('../assests/dp2.png')} alt='dp' />
                            <p className='profilename'>Sarah West</p>
                            <img className="eye" src={require('../assests/Group 3.png')} alt='views' />
                            <p className='views'>1.4k views</p>
                            <button type="button" className='share'><img src={require('../assests/Vector (4).png')} alt="..."/></button>

                        </div>
                    </div>
                    <div class="card bigcards">
                        <img src={require('../assests/card3.png')} class="card-img-top" alt="..." />
                        <p className="Article">🗓️ Meetup</p>
                        <div class="card-body">
                            <img className={"dots"} src={require('../assests/Vector (5).png')}alt="..."></img>
                            <h5 class="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>


                            <div className='loc'>
                                <img className={"datepic"} src={require('../assests/datepic.png')}alt="..."></img>
                                <p className="date">Fri, 12 Oct, 2018</p>
                                <img className='locdot' src={require('../assests/locdot.png')}alt="..."></img>
                                <img className='locpic' src={require("../assests/locpic.png")}alt="..."></img>
                                <p className='location'>Ahmedabad, India</p>
                            </div>
                            <button type="button" className="btn bt-outline-secondary visit">Visit Website</button>

                        </div>
                        <div class="card-footer">
                            <img className='dp' src={require('../assests/dp3.png')} alt='dp' />
                            <p className='profilename'>Sarah West</p>
                            <img className="eye" src={require('../assests/Group 3.png')} alt='views' />
                            <p className='views'>1.4k views</p>
                            <button type="button" className='share'><img src={require('../assests/Vector (4).png')} alt="..."/></button>

                        </div>
                    </div>
                    <div class="card small">
                        <div className='fullbody'>
                            <p className=" lastarticle">💼️ Job</p>
                            <div class="card-body smallbody">

                                <img className={"dots lastdots"} src={require('../assests/Vector (5).png')} alt="..."></img>
                                <h5 class="card-title title">Software Developer</h5>
                                <div className='loc'>
                                    <img className={"jobpic"} src={require('../assests/jobpic.png')} alt="..."></img>
                                    <p className="company">Innovaccer Analytics Private Ltd.</p>
                                    <img className='locdot2' src={require('../assests/locdot.png')} alt="..."></img>
                                    <img className='locpic2' src={require("../assests/locpic.png")} alt="..."></img>
                                    <p className='location2'>Noida, India</p>
                                </div>
                                <button type="button" className="btn bt-outline-secondary apply">Apply on Timesjob</button>
                            </div>
                        </div>
                        <div class=" smallfooter">
                            <img className=' lastdp' src={require('../assests/Lastdp.png')} alt='dp' />
                            <p className='smallprofilename'>Joseph Gray</p>
                            <img className="eye" src={require('../assests/Group 3.png')} alt='views' />
                            <p className='views'>1.4k views</p>
                            <button type="button" className='share'><img src={require('../assests/Vector (4).png')} alt="..." /></button>

                        </div>
                    </div>
                </div>
                <forn className="locationbarform">
                    <img src={require('../assests/locpic.png')}  alt="..."></img>
                    <input className='Locationbar' placeholder="Noida,India" type="text" />
                    <img src={require("../assests/Pencil.png")} alt="..."></img>
                </forn>
                <div className='info'>
                    <img  className="infosign"src={require("../assests/info.png")} alt="..."></img>
                    <p>Your location will help us serve better<br/> and extend a personalised experience.</p>
                </div>

            </div>
        </div>
    )
}

export default Main