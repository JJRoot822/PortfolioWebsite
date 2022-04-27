import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';

const ContactPage = () => {
    return (
        <React.Fragment>
            <NavigationBar />

            <h1>Contact Me</h1>

            <p>
                Do you have a tutorial suggestion? A code question? 
                Please, feel free to reach out. Are you a hiring manager? 
                I'd love to hear from you.All you have to do is fill out the form,
                providing your first name, last name, email and optionally 
                the name you would prefer to be called. A response will be sent 
                withing 24 hours of receipt of your message. Thank you! 
            </p>
        </React.Fragment>
    );
};

export default ContactPage;
