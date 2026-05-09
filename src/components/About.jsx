import React from 'react';
import  './CSS/About.css';
import {Box} from "@mui/material";
import img from "../../public/resized_first_photo.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function About(props) {
    return (
        <section  id="about" >
            <Box display="flex" alignItems="center" justifyContent="center" className="about">
                <img src={img} />
                <Box className="info-box">
                    <Box className="text">
                        <h3>Hi, I'm</h3>
                        <h1>Oleksandr Hanysh</h1>
                        <span>Frontend Developer</span>
                    </Box>
                    <Box className="btn-group">
                        <a href="/Oleksandr_Hanysh_CV.pdf" download="Oleksandr_Hanysh_CV.pdf">
                        <div className="btn"  >Download CV</div>
                        </a>
                        <div className="btn" >Contact</div>
                    </Box>
                    <Box className="socials">
                        <a href="https://github.com/7scaiman" target="_blank">
                        <GitHubIcon fontSize="large"/>
                        </a>
                        <a href="hhttps://www.linkedin.com/in/oleksandr-hanysh-87b99b33b/" target="_blank">
                        <LinkedInIcon fontSize="large"/>
                        </a>
                        <a href="https://www.instagram.com/sacha_ganich?igsh=MWg4Z2FoMzRiMXUxaw%3D%3D&utm_source=qr" target="_blank">
                            <InstagramIcon fontSize="large" />
                        </a>

                    </Box>
                </Box>
            </Box>
        </section>
    );
}

export default About;