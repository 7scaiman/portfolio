import React from 'react';
import '../CSS/Unit.css';

import { Button, IconButton } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Unit16(props) {
    return (
        <section className="unit-page">

            {/* LEFT ARROW */}
            <Link to="/Unit11" className="unit-arrow left-arrow">
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>

            {/* RIGHT ARROW */}
            <Link to="/Unit17" className="unit-arrow right-arrow">
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <div className="unit-container">

                <h1 className="unit-title">Unit 16</h1>

                <div className="unit-card">

                    <div className="unit-text">
                        <h2>Automated Systems</h2>

                        <p>
                            Automated Systems

In this unit, I learned about automated systems and how automation is used in modern technology and industry. I explored how automated systems use inputs, processes and outputs to complete tasks efficiently with minimal human interaction.

As part of this unit, I created an automated system project in Unreal Engine 5. I designed and developed a small interactive environment that demonstrated how automated systems can control movements, triggers and actions inside a digital space. This helped me improve my problem-solving, programming and game development skills.

I also learned about the advantages and disadvantages of automation, including efficiency, accuracy, reliability and safety. During the assignments, I explained how different automated systems work and created flowcharts and system designs to show the logic behind automated processes.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/Unit16/Unit16.png"
                        alt="Unit 16 Automated Systems"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">
                        <Button
                                component="a"
                                variant="contained"
                                 startIcon={<DownloadIcon />}
                                    href="/Unit16/UNIT16A1.zip"
                                                   download="UNIT16A1.zip"
                                >
                                 Assignment 1
                        </Button>
                       
                        <Button
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                href="/Unit16/UNIT16A2.zip"
                                download="UNIT16A2.zip"
                             >
                                Assignment 2
                        </Button>


                    

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Unit16;