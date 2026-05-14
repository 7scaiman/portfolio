import React from 'react';
import './CSS/Project.css';
import projectImg from "../../public/project1.png"
import projectImg2 from "../../public/project2.png"
import projectImg3 from "../../public/project3.png"
import {Button, Box} from "@mui/material";
function Projects(props) {
    return (
        <section className="projects" id="projects">
           <Box>

            <h2 className="section-title">
                Projects and works
            </h2>
               <Box className="projects-grid" >
            <Box className="project-card">
                <img src={projectImg} alt="project1" />
                <h3>DeviShop</h3>
                <p> This project was my diploma project at IT Step Academy.
                    It is the only project where I used full-stack development.
                    For the frontend I used React, Bootstrap, MobX, and Stripe.
                    For the backend I used Node.js and PostgreSQL.
                </p>
                <Button  variant="outlined" color="secondary" href="https://github.com/7scaiman/DeviShop" target="_blank" >Github repo</Button>


            </Box>
            <Box className="project-card">
                <img src={projectImg2} alt="project1" />
                <h3>Weather forecast</h3>
                <p>
                    This project was written using only HTML/CSS and JS. There I used an API for the first time.
                </p>
                <Button  variant="outlined" color="secondary" href="https://github.com/7scaiman/Weather-js" target="_blank" >Github repo</Button>
            </Box>
            <Box className="project-card">
                <img src={projectImg3} alt="project1" />
                <h3>Simple snake</h3>
                <p>
                    This is my first project. I created it after reading a book about JavaScript.
                </p>
                <Button  variant="outlined" color="secondary" href="https://github.com/7scaiman/Snake-js" target="_blank">Github repo</Button>
            </Box>
               </Box>
           </Box>
            <div className="drive-link">
                <a
                    href="https://drive.google.com/drive/folders/1zvt433FOT3X85lQ-xwxEDMj57yiQEmJl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link to Google Drive
                </a>

                <p>
                    This Google Drive contains all of my projects, including my diploma project and demonstration videos.
                </p>
            </div>
        </section>
    );
}

export default Projects;