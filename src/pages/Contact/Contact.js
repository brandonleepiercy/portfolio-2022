import React from 'react';
import './Contact.css';

import SideBranding from '../../components/SideBranding/SideBranding';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className='contact-back'>
        <div className='contact-side-container'>
            <SideBranding left={true} atAbout={false}/>
        </div>

        <div className='contact-middle-container'>
            <ContactForm/>
        </div>

        <div className='contact-side-container'>
            <SideBranding left={false} atAbout={false}/>
        </div>
    </div>
    );
};

export default Contact;