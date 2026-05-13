import React from 'react';
import './CSS/About.css';

import { Box } from '@mui/material';

function About() {
    return (
        <section id="about" className="About-section">

            <h2 className="section-title">About me</h2>

            <Box className="About-card">

                <Box className="About-text">

                    <p>
                        My name is Oleksandr Hanysh, I am 20 years old and originally from Ukraine.
                        I am passionate about frontend development and modern web technologies,
                        with a goal of becoming a Frontend Developer in the future.
                    </p>

                    <p>
                        I studied Software Development at IT Step Academy, where I improved my
                        programming and web development skills through different personal projects.
                        I enjoy creating responsive and user-friendly websites using React,
                        JavaScript, HTML, and CSS.
                    </p>

                    <p>
                        One of my main projects was a full-stack online electronics store built
                        with React, Node.js, PostgreSQL, and Stripe integration. Currently,
                        I am studying IT at college in Liverpool and continuing to improve my
                        coding skills and knowledge in web development.
                    </p>

                    <p>
                        Due to circumstances related to moving from Ukraine to the UK,
                        I am currently continuing my education at college in Liverpool.
                    </p>
                </Box>

            </Box>

        </section>
    );
}

export default About;