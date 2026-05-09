import React, { useState } from 'react';
import './CSS/NavBar.css';
import { Toolbar, Box, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <Toolbar className="navbar-content">

                <Button className="logo" href="#about">
                    Oleksandr
                </Button>

                <Box className={open ? "nav-links active" : "nav-links"}>
                    <Button href="#about" className="NavButton">About</Button>
                    <Button href="#experience" className="NavButton">Experience</Button>
                    <Button href="#projects" className="NavButton">Projects</Button>
                    <Button href="#contact" className="NavButton">Contact</Button>
                </Box>

                <MenuIcon id="menu-icon" onClick={() => setOpen(!open)} />

                <Button className="github-btn" href="" target="_blank">
                    Visit GitHub
                </Button>

            </Toolbar>
        </header>
    );
}

export default Navbar;