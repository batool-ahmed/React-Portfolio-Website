// import React from 'react'

// function CreatePortfolio() {
//   return (
//     <form class="padding-5 padding-top-2">
//     <h3 class="text-center">New Portfolio</h3>
//     <label for="title">Title</label>
//     <input className ='createField' type = "text" placeholder='title' name="title"/>
//     <label for="content">Content</label>
//     <textarea className ='createField' name="content" rows="5"/>
//     <button type="submit" class="pink-button horizontal-center">Create</button>
//  </form>
//   )
// }

// export default CreatePortfolio

import React, { useState, useContext } from 'react';
import UserContext from "./UserContext";


function CreatePortfolio() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { username } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Read the form data
    const newPortfolio = { title, username, content };

    // Read the existing portfolios from localStorage
    const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];

    // Add the new portfolio to the array
    portfolios.push(newPortfolio);

    // Save the updated portfolios to localStorage
    localStorage.setItem('portfolios', JSON.stringify(portfolios));

    // Clear the form inputs
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} class="padding-5 padding-top-2">
      <h3 class="text-center">New Portfolio</h3>
      <label for="title" className='leftAlign'>Title</label>
      <input className ='createField' type="text" placeholder='title' name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      <label for="content" className='leftAlign'>Content</label>
      <textarea className ='createField' name="content" rows="10" value={content} onChange={(event) => setContent(event.target.value)} />
      <button type="submit" class="pink-button purple-button horizontal-center">Create</button>
    </form>
  )
}

export default CreatePortfolio;

