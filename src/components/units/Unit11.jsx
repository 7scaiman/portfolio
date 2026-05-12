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
                            In this unit, I learned about computer networks,
                            different types of networks, network devices,
                            data transmission, security and how the internet works.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/unit10.png"
                        alt="Unit 10 Computer Networks"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">

                        <Button
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            href="/Unit10_Assignment_1.pdf"
                            download
                        >
                            Assignment 1
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            href="/Unit10_Assignment_2.pdf"
                            download
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