import React from 'react'
import './OurTeamElements.css'

const OurTeam = () => {
    return (
        <div className = "wrapper">
            <h2 className="heading2">Our<strong className="StrongHeading"> Team</strong></h2>
            <div className = "cards-container">
                <div className = "card">
                    <div className = "card-wrapper">
                        <div className = "front-card">
                            <div>
                                <h2>PRACHI KAMBOJ</h2>
                                <p>Author</p>
                            </div>
                        </div>
                        <div className = "rear-card">
                            <p>TEAM MEMBER</p>
                            <div className = "about-info">
                                <img src = "images/person1.jpg" alt = "about img"/>
                                <div>
                                    <h2>PRACHI KAMBOJ</h2>
                                    <p>Author</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card">
                    <div className = "card-wrapper">
                        <div className = "front-card">
                            <div>
                                <h2>ABHISHEK GUPTA</h2>
                                <p>Manager</p>
                            </div>
                        </div>
                        <div className = "rear-card">
                            <p>TEAM MEMBER</p>
                            <div className = "about-info">
                                <img src = "images/person4.jpg" alt = "about img"/>
                                <div>
                                    <h2>ABHISHEK GUPTA</h2>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card">
                    <div className = "card-wrapper">
                        <div className = "front-card">
                            <div>
                                <h2>ANSHUL KASANA</h2>
                                <p>Designer</p>
                            </div>
                        </div>
                        <div className = "rear-card">
                            <p>TEAM MEMBER</p>
                            <div className = "about-info">
                                <img src = "images/person3.jpg" alt = "about img"/>
                                <div>
                                    <h2>ANSHUL KASANA</h2>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "card">
                    <div className = "card-wrapper">
                        <div className = "front-card">
                            <div>
                                <h2>ASHISH DABRAL</h2>
                                <p>Manager</p>
                            </div>
                        </div>
                        <div className = "rear-card">
                            <p> TEAM MEMBER</p>
                            <div className = "about-info">
                                <img src = "images/person2.jpg" alt = "about img"/>
                                <div>
                                    <h2>ASHISH DABRAL</h2>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default OurTeam
