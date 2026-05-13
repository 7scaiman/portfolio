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

In this unit, I learned about multimedia products and how different types of media are used to create interactive and engaging digital experiences. I explored the difference between linear and interactive multimedia products and how they are used in education, entertainment and marketing.

As part of this unit, I worked on a space-themed project about Mars and created multimedia content for a museum exhibition concept. I designed interactive presentations and small mini-games using GDevelop to make the experience more engaging for users. The project helped me improve my creativity, design and development skills while learning how to combine text, images, sound, animation and user interaction in one product.

During the assignments, I also learned how to plan, design, test and review multimedia products, as well as how to collect feedback and improve the final result for different target audiences.
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
                                >
                                 Assignment 1
                        </Button>
                       
                        <Button
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                href="/Unit17/UNIT17A2.zip"
                                download="UNIT17A2.zip"
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