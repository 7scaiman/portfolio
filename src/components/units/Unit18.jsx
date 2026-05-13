import React from 'react';
import '../CSS/Unit.css';

import { Button, IconButton } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Unit18(props) {
    return (
        <section className="unit-page">

            {/* LEFT ARROW */}
            <Link to="/Unit17" className="unit-arrow left-arrow">
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>

            {/* RIGHT ARROW */}
            <Link to="/Unit19" className="unit-arrow right-arrow">
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <div className="unit-container">

                <h1 className="unit-title">Unit 18</h1>

                <div className="unit-card">

                    <div className="unit-text">
                        <h2>Computational Thinking</h2>

                        <p>
                            Computational Thinking

                            In this unit, I learned about computational thinking and how to solve problems using logic, algorithms and structured planning. I explored concepts such as decomposition, pattern recognition and abstraction.

                            As part of this unit, I created a maze project in Unreal Engine 5 with interactive elements and gameplay mechanics. This helped me improve my problem-solving, level design and game development skills.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/Unit18/Unit18.png"
                        alt="Unit 18 Computational Thinking"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">

                        <Button
                            component="a"
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            href="/Unit18/UNIT18.zip"
                            download="UNIT18.zip"
                            color="secondary"
                        >
                            Assignment 1
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Unit18;