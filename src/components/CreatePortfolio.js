import React, { useState, useContext } from 'react';
import UserContext from "./UserContext";

function CreatePortfolio() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const { username } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!image) {
      alert('Please select an image.');
      return;
    }
  
    // Read the form data
    const newPortfolio = { title, username, content, image };
  
    // Read the existing portfolios from localStorage
    const portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
  
    // Add the new portfolio to the array
    portfolios.push(newPortfolio);
  
    // Save the updated portfolios to localStorage
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
  
    // Clear the form inputs
    setTitle('');
    setContent('');
    setImage(null);
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
    

  return (
    <form onSubmit={handleSubmit} className="padding-5 padding-top-2">
      <h3 className="text-center">New Portfolio</h3>
      <label htmlFor="title" className="leftAlign">Title</label>
      <input className="createField" type="text" placeholder="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      <label htmlFor="content" className="leftAlign">Content</label>
      <textarea className="createField" name="content" rows="10" value={content} onChange={(event) => setContent(event.target.value)} />
      <label htmlFor="image" className="leftAlign">Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit" className="pink-button purple-button horizontal-center">Create</button>
    </form>
  );
}

export default CreatePortfolio;
