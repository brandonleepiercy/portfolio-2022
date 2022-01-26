import React, { useState } from 'react';
import './ContactForm.css';


function ContactForm() {

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === null || name.length < 2) {
            alert('Please provide a valid name.');
        } else if (email === null || emailRegex.test(email) === false) {
            alert('Please provide a valid email.');
        } else if (subject === null || subject.length < 2) {
            alert('Please add a subject');
        } else if (message === null ||message.length < 1) {
            alert('Please add a message.');
        } else if (name !== null && email !== null && subject !== null && message !== null) {

            console.log('successful submission attempt, attempting to send mail via AWS SES now.');

            let body = {
                email: email,
                name: name,
                subject: subject,
                message: message
            };

            fetch('http://mail-service.eba-htwmqpu5.us-west-2.elasticbeanstalk.com/email', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)

            }).then(res => { 
                res.json();
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setMessageSent(true);
             })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
        } else {
            console.log('Some type of error occured. Please refresh.');
        }
    };

    const [messageSent, setMessageSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    return (
        <div className='contact-form-container'>
            {messageSent ? <div className='message-sent-confirmation'>message sent</div> : null}
            <form>
                <div className='contact-first-row'>
                    <input className='contact-name-input' type='text' id='contact-name' name='name' placeholder='Name' autoComplete='off' value={name} onChange={(event) => {setName(event.target.value)}} required/>
                    <input className='contact-email-input' type='email' id='contact-email' name='email' placeholder='Email' autoComplete='off' value={email} onChange={(event) => {setEmail(event.target.value)}} required/>                 
                </div>

                <div className='contact-second-row'>
                    <input className='contact-subject-input' type='text' id='contact-subject' name='subject' placeholder='Subject' autoComplete='off' value={subject} onChange={(event) => {setSubject(event.target.value)}} required/>
                </div>

                <div className='contact-third-row'>
                    <textarea className='contact-message-input' id='contact-message' name='message' value={message} onChange={(event) => {setMessage(event.target.value)}} required/>
                </div>

                <div className='contact-submit-container'>
                    <button className='contact-submit-button' onClick={(event) => {handleSubmit(event)}}>SEND</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
