import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [Result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qtef6cz', 'template_u46ggcj', e.target, 'e9IyAI2Jct588igKl')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false)
  }, 4000);

  const [baseStyle, setbaseStyle] = useState('80px')
  const [contactFormIs, setcontactFormIs] = useState(false)
  const expand_contactForm = () => {
    if (contactFormIs === false) {
      setbaseStyle('400px')
      setcontactFormIs(true)
    }
    else {
      setbaseStyle('80px')
      setcontactFormIs(false)
    }
  }

  return (
    <section className="contact" id='contact'>
      <div className="base" style={{ height: baseStyle }}>
        <div className="contact-heading">
          <p className="getintouch">Get a quotation for your plant</p>
          <button onClick={expand_contactForm} className="universal-button openButton">{contactFormIs ? "Close" : "Send a message"}</button>
        </div>
        {
          contactFormIs === true ? <div className="contact-form">
            <form className="text-feilds" onSubmit={sendEmail}>
              <div className="name-email">
                <input type="text" name="fullName" id="name" placeholder="Your company name" required></input>
                <input type="text" name="email" id="email" placeholder="Your email" required></input>
                <div className="phone-capacity">
                  <input type="text" name="phone" id="phnNo" placeholder="Your contact number" required></input>
                  <input type="text" name="capacity" id="capa" placeholder="Your plant's capacity (Optional)"></input>
                </div>
              </div>
              <div className="message">
                <textarea name="message" id="" placeholder="Write your message here..." required></textarea>
              </div>
              <button className="send universal-button">Send Message</button>
            </form>
            {
              Result ? <Success /> : ''
            }
          </div>
            : ''
        }



      </div>
    </section>
  )
}

function Success() {
  return (
    <p className='result'>Message sent successfully.</p>
  );
};