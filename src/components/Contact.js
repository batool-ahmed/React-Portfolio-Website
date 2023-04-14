import React, { useState, useContext, useEffect } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      fetch('https://formspree.io/f/mgebpdab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((response) => {
          if (response.ok) {
            alert('Form submitted successfully');
            // reset the form
            setName('');
            setEmail('');
            setMessage('');
          } else {
            throw new Error('Failed to submit form');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to submit form: ' + error.message);
        })
        .finally(() => {
          setSubmitted(false);
        });
    }
  }, [submitted, name, email, message]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      alert('Please enter your name');
      return;
    }
    if (!/\S+@\S+.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  setSubmitted(true);
  }

  return (
  <form className="padding-5 padding-top-2" onSubmit={handleSubmit}>
    <h3 className="text-center">Contact Us</h3>

    <label htmlFor="name" className="leftAlign">Name</label>
    <input className="createField" type="text" placeholder="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
    
    <label htmlFor="email" className="leftAlign">Email Address</label>
    <input className="createField" type="text" placeholder="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />

    
    <label htmlFor="message" className="leftAlign">Message</label>
    <textarea className="createField" name="message" rows="10" value={message} onChange={(event) => setMessage(event.target.value)} />
    
    <button type="submit" className="pink-button purple-button horizontal-center">Send</button>
  </form>
  )
}

export default Contact;