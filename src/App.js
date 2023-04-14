import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import UserContext from "../src/components/UserContext";


function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={{ username, setUsername }}>
        <Navbar username = {username}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
