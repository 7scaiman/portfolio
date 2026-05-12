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
                            Studied programming for 3 years at IT Step Academy.
                            During the first 6 months, also learned general IT fundamentals
                            and computer technologies. Successfully graduated and received
                            a diploma in Software Development.
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