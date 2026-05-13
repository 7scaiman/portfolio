import React from 'react';
import '../CSS/Unit.css';

import { Button, IconButton } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Unit22(props) {
    return (
        <section className="unit-page">

            {/* LEFT ARROW */}
            <Link to="/Unit19" className="unit-arrow left-arrow">
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>

            {/* RIGHT ARROW */}
            <Link to="/Unit10" className="unit-arrow right-arrow">
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <div className="unit-container">

                <h1 className="unit-title">Unit 22</h1>

                <div className="unit-card">

                    <div className="unit-text">
                        <h2>Computer Security in Practice</h2>

                        <p>
                            Computer Security in Practice
                            In this unit, I learned about computer security and how organisations protect systems, networks and data from cyber threats. I explored different types of security risks, malware, encryption, authentication and methods used to keep information secure.
                            The assignments helped me improve my understanding of cybersecurity, safe working practices and how security is applied in real-world IT environments.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/Unit22/Unit22.png"
                        alt="Unit 22 Computer Security in Practice"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">

                        <Button
                            component="a"
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            href="/Unit22/UNIT22A1.zip"
                            download="UNIT22A1.zip"
                            color="secondary"
                        >
                            Assignment 1
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            href="/Unit22/UNIT22A2.zip"
                            download="UNIT22A2.zip"
                            color="secondary"
                        >
                            Assignment 2
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Unit22