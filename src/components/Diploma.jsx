import React from 'react';
import {Box, Grid} from "@mui/material";
import  './CSS/Diploma.css';
import img from "../../public/img.png"
import img2 from "../../public/70135739.png"
import { Link } from "react-router-dom";
function Diploma(props) {
    return (
        <section id="Diploma" className="Diploma-section">

            <h2 className="section-title">Diploma</h2>

            <Box className="Diploma-card">

                <Box className="Diploma-text">

                    <h3>IT Step Academy</h3>

                    <p>
                        I studied Software Development at IT Step Academy in Ukraine
                        for 3 years, where I learned programming, web development,
                        databases, and software project development.
                    </p>

                    <p>
                        During the first 6 months, I studied the fundamentals of
                        cybersecurity and computer systems. I also received a Cisco
                        certificate after completing the cybersecurity course.
                    </p>

                    <a
                        href="/-ITEssentialsPC-certificate.pdf"
                        download="-ITEssentialsPC-certificate.pdf"
                    >
                        Download Cisco Certificate
                    </a>

                    <p>
                        My first programming language was C++, where I learned the
                        fundamentals of programming and object-oriented development.
                        After that, I studied C#, Java, SQL, JavaScript, and also
                        worked with Unity and basic mobile application development.
                    </p>

                    <p>
                        Later, I focused more on frontend development and learned
                        React and Angular. During the final stage of the course,
                        students had to choose and create a diploma project within
                        3 months.
                    </p>

                    <p>
                        I decided to build a full-stack online electronics store
                        because my goal is to become a Frontend React Developer.
                        The project included user authentication, product management,
                        shopping cart functionality, PostgreSQL database integration,
                        and Stripe payment integration.
                    </p>

                    <p>
                        At the end of the course, I successfully defended my diploma
                        project and received a final grade of 10/12.
                    </p>

                    <a
                        href="/Diploma.pdf"
                        download="Diploma.pdf"
                    >
                        Download Diploma
                    </a>

                </Box>

                <Box className="Diploma-image-box">

                    <a
                        href="/Diploma.pdf"
                        download="Diploma.pdf"
                        className="Diploma-download"
                    >

                        <img
                            src={img}
                            alt="IT Step Academy Diploma"
                        />

                        <div className="Diploma-overlay">
                            Download Diploma
                        </div>

                    </a>

                </Box>


            </Box>

        </section>
    );
}

export default Diploma;