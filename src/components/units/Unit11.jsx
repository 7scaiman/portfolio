import React from 'react';
import '../CSS/Unit.css';

import { Button, IconButton } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Unit11(props) {
    return (
        <section className="unit-page">

            {/* LEFT ARROW */}
            <Link to="/Unit10" className="unit-arrow left-arrow">
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>

            {/* RIGHT ARROW */}
            <Link to="/Unit16" className="unit-arrow right-arrow">
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <div className="unit-container">

                <h1 className="unit-title">Unit 11</h1>

                <div className="unit-card">

                    <div className="unit-text">
                        <h2>Computer Networks</h2>

                        <p>
                            In this unit, I learned about different types of computer networks and how devices communicate with each other. I explored wired and wireless networks, network topologies, IP addressing, data transmission and network security.

I also learned about important network devices such as routers, switches, access points and firewalls, and how they are used in both home and business environments. During this unit, I compared different network setups and explained the advantages and disadvantages of each one.

The assignments helped me improve my understanding of how the internet works, how data travels across networks and why security and reliability are important in modern computer systems.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/Unit11/Unit11.png"
                        alt="Unit 11 Computer Networks"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">

                        <Button
                                component="a"
                                variant="contained"
                                 startIcon={<DownloadIcon />}
                                    href="/Unit11/Unit11A1.zip"
                                                   download="Unit11A1.zip"
                                >
                                 Assignment 1
                        </Button>
                       
                        <Button
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                href="/Unit11/Unit11A2.zip"
                                download="Unit11A2.zip"
                             >
                                Assignment 2
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Unit11;