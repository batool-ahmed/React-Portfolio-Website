import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const home = useNavigate();


    const signin = () => { 
        if ((email == "batool@gmail.com") && (password == "hello1")){
            alert("Login Successful")
            home("/"); // Navigate to the Home component            
        }
        else if ((email == "fatima@gmail.com") && (password == "hello2")){
            alert("Login Successful")
            home("/"); // Navigate to the Home component            
        }
        else {
            alert("Incorrect Email or Password. Please try again.")
        }
    }
    
    return (
    <form className="signinBox center">
        <h1 className="centerText">Empowered</h1>
        <input id ="signinField" type = "email" placeholder='Email' name="email" onChange={(e) => {setEmail(e.target.value)}}/>
        <input id="password signinField" placeholder='Password' type = "password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <button type="submit" className="pink-button signin-button" onClick={signin} >Login</button>
        {/* <p className="centerText">Don't have an account?><strong>Sign up</strong></a></p> */}
    </form>
    )
}

export default SignIn