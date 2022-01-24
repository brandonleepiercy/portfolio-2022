import React from 'react';
import './Contact.css';

import SideBranding from '../../components/SideBranding/SideBranding';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactHeading from '../../components/ContactHeading/ContactHeading';

import Typist from 'react-typist';

function Contact() {
  return (
    <div className='contact-back'>
        <div className='contact-side-container'>
            <SideBranding left={true} atAbout={false}/>
        </div>

        <div className='contact-middle-container'>
            <ContactHeading/>
            <ContactForm/>
        </div>

        <div className='contact-side-container'>
            <SideBranding left={false} atAbout={false}/>
        </div>
        <div className='contact-decorative-text'>
            <Typist.Delay ms={2500}/>
            <Typist>work with me</Typist>
        </div>
    </div>
    );
};

export default Contact;
