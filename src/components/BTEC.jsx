import React from 'react';
import {Box, Grid} from "@mui/material";
import  './CSS/BTEC.css';
import img from "../../public/city-of-liverpool-college-black-logo-480x180.png"
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorageIcon from '@mui/icons-material/Storage';
function BTEC(props) {
    return (
        <section id="BTEC" className="BTEC-section">
            <Box>
            <h2 className="section-title">BTEC - City of Liverpool College</h2>
            <Box className="BTEC-info">
                <Box className="grid">
                    <Box>
                        <p>
                            Currently studying BTEC Level 2 Information and Creative Technology at The City of Liverpool College.
Learning web development, programming fundamentals, IT systems, digital technologies, and creative computing skills.
Working with modern technologies and improving practical problem-solving abilities through projects and coursework.
                        </p>
                    </Box>
                </Box>
            <img src={img}/>
            </Box>
            </Box>
        </section>
    );
}

export default BTEC;