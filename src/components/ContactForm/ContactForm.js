import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <div className='contact-form-container'>
            <form>
                <div className='contact-first-row'>
                    <input className='contact-name-input' type='text' id='contact-name' name='name' placeholder='Name' required/>
                    <input className='contact-email-input' type='text' id='contact-email' name='email' placeholder='Email' required/>                 
                </div>

                <div className='contact-second-row'>
                    <input className='contact-subject-input' type='text' id='contact-subject' name='subject' placeholder='Subject' required/>
                </div>

                <div className='contact-third-row'>
                    <textarea className='contact-message-input' id='contact-message' name='message' required/>
                </div>

                <div className='contact-submit-container'>
                    <button className='contact-submit-button'>SEND</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
