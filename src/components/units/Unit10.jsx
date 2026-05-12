import React from 'react';
import '../CSS/Unit.css';

import { Button, IconButton } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';

function Unit10() {
    return (
        <section className="unit-page">

            {/* LEFT ARROW */}
            <Link to="/Unit22" className="unit-arrow left-arrow">
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>

            {/* RIGHT ARROW */}
            <Link to="/Unit11" className="unit-arrow right-arrow">
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>

            <div className="unit-container">

                <h1 className="unit-title">Unit 10</h1>

                <div className="unit-card">

                    <div className="unit-text">
                        <h2>Database Systems</h2>

                        <p>
                            In this unit, I learned about database systems,
                            tables, relationships, primary keys and
                            how data is organised and managed.

                            For Assignment 1, I created a presentation
                            about how database systems are used
                            in the police and banking sectors.

                            I also designed for Assignment 2, a database for a shop,
                            including a table structure and relationships
                            between the tables.
                        </p>
                    </div>

                    <img
                        className="unit-image"
                        src="/Unit10.png"
                        alt="Unit 10 Computer Networks"
                    />

                </div>

                <div className="unit-downloads">

                    <h2>Download Assignments</h2>

                    <div className="unit-buttons">

                        <Button
                            component="a"
                            variant="contained"
                            startIcon={<DownloadIcon />}
                            href="/AssigmentsFiles/Unit10/Unit10A1.pdf"
                            download="Unit10A1.pdf"
                        >
                            Assignment 1
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            href="/AssigmentsFiles/Unit10/Unit10A2.pdf"
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

export default Unit10;