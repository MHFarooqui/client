import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    let navigate = useNavigate();

    const cancelCourse = () => {
        document.getElementById("login-form").reset();
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/users/login", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name: username, password: password })
        });
        const json = await response.json();
        console.log(json)
        if (response.status == 200) {
            navigate('/home');
         }
        //nevigate
        else { cancelCourse(); }

        //clear form
    };
    return (
        <div>{loggedIn ? (
            <div>
                <h1>Welcome, {username}!</h1>
                <button onClick={() => setLoggedIn(false)}>Logout</button>
            </div>
        ) : (
            <div className='body'>
                <div className="form-container">
                    <form className='form-background' id='login-form'>
                        <ul>
                            <h2>
                                Login
                            </h2>
                            <li>
                                <label for="username">Username:</label>
                                <input type="text" id="username" required onChange={(e) => setUsername(e.target.value)} />
                            </li>
                            <li>
                                <label for="password">Password:</label>
                                <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                            </li>
                            <li>
                                <button onClick={handleLogin}>LOG IN</button>
                            </li>
                        </ul>

                    </form>
                </div>

            </div>
        )}
        </div>
    )

}
