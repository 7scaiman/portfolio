import React, { useRef } from 'react';
import { Box } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

import './CSS/Contacts.css';

function ContactsMe() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_pq6t4eq",
            "template_riywdmo",
            form.current,
            "JKsNR7TQzQlM_pb_w"
        )
            .then(() => {
                alert("Message sent!");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send message");
            });
    };
    return (
        <section id="contact" className="contact">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
            >
                <Box className="input-box">
                    <h2 className="section-title">
                        Contact me
                    </h2>
                    <Box className="input">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <EmailIcon
                            className="icon"
                            sx={{
                                position: "absolute",
                                fontSize: "4rem",
                                top: "50%",
                                left: "10px",
                                transform: "translate(50%, -50%)"
                            }}
                        />
                    </Box>
                    <textarea
                        name="message"
                        placeholder="Your message..."
                        required
                    />
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </Box>

            </form>

        </section>
    );
}

export default ContactsMe;