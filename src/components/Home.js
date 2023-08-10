import React from "react";
import profilePhoto from "../assets/pramfoto.jpg";
import wavingHand from "../assets/wavingHand2.png";

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="banner">
                <div className="banner-text">
                    <h1>Front-End Web Developer
                        <img src={wavingHand} alt="waving-hand" className="waving-hand"/>
                    </h1>
                    <p className="des">Hi! I'm <b>Pramudya Diagusta</b>, A passionate Front-End Web Developer based in Semarang, Indonesia 📍</p>
                    <div className="banner-icon">
                        <a href="https://www.linkedin.com/in/pramudya-diagusta-853821251/" target="_blank"><i className="fa-brands fa-linkedin icons"></i></a>
                        <a href="https://github.com/prampokan" target="_blank"><i className="fa-brands fa-github icons"></i></a>
                    </div>
                </div>
                <div className="banner-image">
                    <img src={profilePhoto} alt="profile-photo" className="profile-photo"/>
                </div>
            </div>
        </div>
    );
}

export default Home