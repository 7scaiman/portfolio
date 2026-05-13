import React from 'react';
import {Box, Grid} from "@mui/material";
import  './CSS/Experience.css';
import img from "../../public/img.png"
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorageIcon from '@mui/icons-material/Storage';
function Experience(props) {
    return (
        <section id="experience" className="experience">
            <Box>
            <h2 className="section-title">Experience</h2>
            <Box className="experience-info">
                <Box className="grid">
                    <Box className="grid-card">
                        <SchoolIcon fontSize="large" sx={{ marginBottom: "1rem" }}/>
                        <span>IT Step Academy</span>
                        <h3>3 Years</h3>
                        <p>
                            Studied programming for 3 years at IT Step Academy.
                            During the first 6 months, also learned general IT fundamentals
                            and computer technologies. Successfully graduated and received
                            a diploma in Software Development.
                        </p>
                    </Box>
                    <Box className="grid-card">
                        <MenuBookIcon fontSize="large" sx={{ marginBottom: "1rem" }}/>
                        <span>The City of Liverpool College</span>
                        <h3>2 Years</h3>
                        <p>Studied English language and Information & Creative Technology
                            at college in the United Kingdom.</p>
                    </Box>
                    <Box className="grid-card">
                        <CodeIcon fontSize="large" sx={{ marginBottom: "1rem" }}/>
                        <span>Frontend Development</span>
                        <h3>Skills</h3>
                        <p>Worked with JavaScript, TypeScript, React, Material UI,
                            React Bootstrap, Redux, Axios, MobX, and Stripe.
                            Also studied Angular basics.</p>
                    </Box>
                    <Box className="grid-card">
                        <StorageIcon fontSize="large" sx={{ marginBottom: "1rem" }}/>
                        <span>Backend Basics</span>
                        <h3>Experience</h3>
                        <p>Had some experience working with Node.js and PostgreSQL,
                            including basic backend and database development.</p>
                    </Box>
                </Box>
            </Box>
            </Box>
        </section>
    );
}

export default Experience;