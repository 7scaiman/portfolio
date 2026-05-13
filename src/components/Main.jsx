import React from 'react';
import  './CSS/Main.css';
import {Box} from "@mui/material";
import img from "../../public/resized_first_photo.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Main(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <section  id="main" >
            <Box display="flex" alignItems="center" justifyContent="center" className="about">
                <img src={img} />
                <Box className="info-box">
                    <Box className="text">
                        <h3>Hi, I'm</h3>
                        <h1>Oleksandr Hanysh</h1>
                        <span>Frontend Developer</span>
                    </Box>
                    <Box className="btn-group">
                        <a href="/Oleksandr_Hanysh_CV.pdf" download="Oleksandr_Hanysh_CV.pdf">
                        <div className="btn"  >Download CV</div>
                        </a>
                        <div className="btn" onClick={() => setOpen(true)}>Contact</div>
                        <Dialog open={open} onClose={() => setOpen(false)} className="contact-dialog">
                            <DialogTitle>Contact Me</DialogTitle>          
                            <DialogContent>
                                <p>Email:<a href="mailto:sanya.hanysh@gmail.com"> sanya.hanysh@gmail.com</a></p>
                                <p>Phone number:<a href="tel:+447428963273">  <br /> +44 7428 963273</a></p>
                            </DialogContent>
                            <DialogActions>
                                <div className="btn dialog-btn" onClick={() => setOpen(false)}>Close</div>
                            </DialogActions>                           
                             </Dialog>
                    </Box>
                    <Box className="socials">
                        <a href="https://github.com/7scaiman" target="_blank">
                        <GitHubIcon fontSize="large"/>
                        </a>
                        <a href="https://www.linkedin.com/in/oleksandr-hanysh-87b99b33b/" target="_blank">
                        <LinkedInIcon fontSize="large"/>
                        </a>
                        <a href="https://www.instagram.com/sacha_ganich?igsh=MWg4Z2FoMzRiMXUxaw%3D%3D&utm_source=qr" target="_blank">
                            <InstagramIcon fontSize="large" />
                        </a>

                    </Box>
                </Box>
            </Box>
        </section>
    );
}

export default Main;