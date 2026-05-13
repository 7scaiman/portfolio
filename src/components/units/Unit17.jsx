import React from 'react';
import '../CSS/Unit.css';

import { Button, IconButton } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
function Unit17(props) {
    return (
        <section className="unit-page">

            {/* LEFT ARROW */}
            <Link to="/Unit16" className="unit-arrow left-arrow">
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>

            {/* RIGHT ARROW */}
            <Link to="/Unit18" className="unit-arrow right-arrow">
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <div className="unit-container">

                <h1 className="unit-title">Unit 17</h1>

                <div className="unit-card">

                    <div className="unit-text">
                        <h2>Multimedia Products</h2>

                        <p>
                            Multimedia Products
                            In this unit, I learned about multimedia products and the difference between linear and interactive media. I explored how multimedia is used in education and entertainment.
                            As part of this unit, I created a space-themed multimedia project about Mars and designed small mini-games using GDevelop. This helped me improve my creativity, design and development skills.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/Unit17/Unit17.png"
                        alt="Unit 17 Multimedia Products"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">

                        <Button
                                component="a"
                                variant="contained"
                                 startIcon={<DownloadIcon />}
                                    href="/Unit17/UNIT17A1.zip"
                                                   download="UNIT17A1.zip"
                                color="secondary"
                                >
                                 Assignment 1
                        </Button>
                       
                        <Button
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                href="/Unit17/UNIT17A2.zip"
                                download="UNIT17A2.zip"
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

export default Unit17;