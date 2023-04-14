import React, { useState, useContext } from 'react';
import UserContext from "./UserContext";

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { username } = useContext(UserContext);

  return (
    <form className="padding-5 padding-top-2">
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

export default Contact