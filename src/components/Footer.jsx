import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">

            <ul>
                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#experience">Experience</a>
                </li>

                <li>
                    <a href="#Diploma">Diploma</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#BTEC">BTEC</a>
                </li>
            </ul>

            <p className="footer-note">
                This portfolio website was personally designed and developed by me
                using React, Material UI, and Vercel.
            </p>

            <p className="copyright">
                © All Rights Reserved | Oleksandr Hanysh
            </p>

        </footer>
    );
}

export default Footer;