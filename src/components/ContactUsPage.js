import React from 'react';
import FormComponent from './FormComponent';
import '../Styles.css';

const ContactUsPage = () => (
    <div className="contact-us-page">
        <div className="contact-us-content">
            <div className="section">
                <h2>Send Us a Message</h2>
                <FormComponent />
            </div>
            <div className="section">
                <p>For more information about NARO</p>
                <p>Email:""</p>
                <p>Phone:""</p>
                <p>Address:""</p>
            </div>
        </div>
    </div>
);

export default ContactUsPage;