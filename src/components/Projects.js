import React from "react";
import todolist from "../assets/todolist.png"
import bmi from "../assets/bmi.png"
import moviedb from "../assets/moviedb.png"
import admin from "../assets/adminCrud.png"

const Projects = () => {
    return(
        <div className="projects">
            <div className="projects-content">
                <h3>Projects</h3>
                <h5>Personal portofolio that being part of my learning journey🧩</h5>
                <div className="boxWrapper">
                    <div className="box">
                        <img src={moviedb} alt="moviedb" className="img-porto"/>
                        <div className="box-text">
                            <h5>the movie db🎬</h5>
                            <p>The most complete Movie list web Using The Movie Database API and consume it into react</p>
                            <div className="tech">
                                <p>React</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/prampokan/MovieCatalog.git" target="_blank" className="link">
                                    Code
                                    <i className="fa-brands fa-github link-icon"></i>
                                </a>
                                <a href="https://flourishing-jalebi-76b347.netlify.app/" target="_blank" className="link">
                                    Live Demo
                                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                            <div className="box-text">
                                <h5>simple crud🧑🏻‍💻</h5>
                                <p>Simple Admin CRUD Page Using the classic AdminLTE Template and MySQL DBMS</p>
                                <div className="tech">
                                    <p>Laravel</p>
                                    <p>Bootstrap</p>
                                </div>
                                <div className="links">
                                    <a href="https://github.com/prampokan/CRUDLaravel.git" target="_blank" className="link">
                                        Code
                                        <i className="fa-brands fa-github link-icon"></i>
                                    </a>
                                    <a className="link">
                                        Live Demo
                                        <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                                    </a>
                                </div>
                            </div>
                            <img src={admin} alt="moviedb" className="img-porto"/>
                    </div>
                    <div className="box">
                        <img src={bmi} alt="bmi" className="img-porto"/>
                        <div className="box-text">
                            <h5>BMI Calculator💪🏻</h5>
                            <p>Calculator that can count your Body Mass Index, and decide if you have a healthy weight or not</p>
                            <div className="tech">
                                <p>HTML</p>
                                <p>Tailwind</p>
                                <p>Javascript</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/prampokan/Body-Mass-Index.git" target="_blank" className="link">
                                    Code
                                    <i className="fa-brands fa-github link-icon"></i>
                                </a>
                                <a href="https://bmicalculator.prampokan.repl.co/" target="_blank" className="link">
                                    Live Demo
                                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-text">
                            <h5>to do list🖋️</h5>
                            <p>To do list web with edit and delete feature, using local storage for temporary storage </p>
                            <div className="tech">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javascript</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/prampokan/To-do-list.git" target="_blank" className="link">
                                    Code
                                    <i className="fa-brands fa-github link-icon"></i>
                                </a>
                                <a href="https://todolist.prampokan.repl.co/" target="_blank" className="link">
                                    Live Demo
                                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                                </a>
                            </div>
                        </div>
                        <img src={todolist} alt="todolist" className="img-porto"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects