import React from 'react';
import './ContactSocialRow.css';

import { AiOutlineLinkedin } from 'react-icons/ai';

function ContactSocialRow() {
  return (
      <div className='social-row-container'>
          <div className='linkedIn-button-wrapper'>
              <a href='https://www.linkedin.com/in/brandon-lee-piercy/' target='_blank'><AiOutlineLinkedin color={"#879777"} size={'2vw'} className='contact-social-icon'/></a>
          </div>
      </div>
  );
}

export default ContactSocialRow;
