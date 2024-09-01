import React from 'react';
import FormComponent from './FormComponent';
import '../Styles.css';

const ContactUsPage = () => (
    <div className="contact-us-page">
        <div className="contact-us-content">
            <div className="section">
                <h2 style={{color:'white'}}>Send Us a Message</h2>
                <FormComponent />
            </div>
        </div>
    </div>
);

export default ContactUsPage;