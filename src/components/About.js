import React from "react";
import fotoAbout3 from "../assets/fotoAbout3.jpeg"

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <div className="image-about">
                    <div className="mac-dot">
                        <i className="fa-solid fa-circle dot1"></i>
                        <i className="fa-solid fa-circle dot2"></i>
                        <i className="fa-solid fa-circle dot3"></i>
                    </div>
                    <img src={fotoAbout3} alt="foto-about" className="foto-about"/>
                </div>
                <div className="text-about">
                    <h3>about me</h3>
                    <h5>A passionate Front-End Web Developer based in Semarang, Indonesia 📍</h5>
                    <p><b>I'm Pram!</b> I am a Front-End Web Developer who is proficient in HTML, CSS, Javascript, React and Laravel. I've been learning to code for about a year, and have a strong curiosity and desire to learn and master programming technologies. I am also a Computer Engineering Student at Diponegoro University. Here is where I get to know the world of Information Technology, Programming, IoT, Computer Networks, and many more.</p>
                </div>
            </div>
        </div>
    );
}

export default About