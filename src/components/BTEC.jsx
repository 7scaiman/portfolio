import React from 'react';
import {Box, Grid} from "@mui/material";
import  './CSS/BTEC.css';
import img from "../../public/city-of-liverpool-college-black-logo-480x180.png"
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from "react-router-dom";
function BTEC(props) {
    return (
        <section id="BTEC" className="BTEC-section">
    <h2 className="section-title">BTEC - City of Liverpool College</h2>

    <Box className="BTEC-card">
        <Box className="BTEC-text">
            <h3>BTEC Level 2 ICT</h3>

            <p>
                Currently studying BTEC Level 2 Information and Creative Technology
                at The City of Liverpool College.
            </p>

            <p>
                Learning web development, programming fundamentals, IT systems,
                digital technologies, and creative computing skills.
            </p>

            <p>
                Improving practical problem-solving abilities through projects
                and coursework. 

            </p>
            <Link to="/Unit10"  style={{color: "#1976d2", textDecoration: "underline"}}>Unit 10 - Database Systems</Link>
            <br/>
            <Link to="/Unit11" style={{color: "#1976d2", textDecoration: "underline"}}>Unit 11 - Computer Networks</Link>
            <br/>
            <Link to="/Unit16" style={{color: "#1976d2", textDecoration: "underline"}}>Unit 16 - Automated Systems</Link>
            <br/>
            <Link to="/Unit17" style={{color: "#1976d2", textDecoration: "underline"}}>Unit 17 - Multimedia Products</Link>
            <br/>
            <Link to="/Unit18" style={{color: "#1976d2", textDecoration: "underline"}}>Unit 18 - Computational Thinking</Link>
            <br/>
            <Link to="/Unit19" style={{color: "#1976d2", textDecoration: "underline"}}>Unit 19 - Computing in the Workplace</Link>
            <br/>
            <Link to="/Unit22" style={{color: "#1976d2", textDecoration: "underline"}}>Unit 22 - Computer Security in Practice</Link>
        </Box>

        <Box className="BTEC-image-box">
            <img src={img} alt="City of Liverpool College" />
        </Box>
    </Box>
</section>
    );
}

export default BTEC;