import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();
    const { setUsername: setUsernameContext } = useContext(UserContext);

    const signin = () => { 
        if ((username == "batool") && (password == "hello1")){
            alert("Login Successful")
            setUsernameContext(username); //setting username 
            redirect("/"); // Navigate to the Home component            
        }
        else if ((username == "fatima") && (password == "hello2")){
            alert("Login Successful")
            setUsernameContext(username); //setting username 
            redirect("/"); // Navigate to the Home component            
        }
        else {
            alert("Incorrect Email or Password. Please try again.")
        }
    }
    
    return (
    <form className="signinBox center">
        <h3 className="centerText">Sign in</h3>
        <input id ="signinField" type = "email" placeholder='Email' name="email" onChange={(e) => {setUsername(e.target.value)}}/>
        <input id="password signinField" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <button type="submit" className="pink-button signin-button" onClick={signin} >Login</button>
    </form>
    )
}

export default SignIn