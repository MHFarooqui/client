import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    let navigate = useNavigate();

    const cancelCourse = () => {
        document.getElementById("login-form").reset();
    }

    const handleSave = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/posts/create", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title: title, body: description })
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

        <div className='body'>
            <div className="form-container">
                <form className='form-background' id='login-form'>
                    <ul>
                        <h2>
                            Create Post
                        </h2>
                        <li>
                            <label for="Title">Title:</label>
                            <input type="text" id="title" required onChange={(e) => setTitle(e.target.value)} />
                        </li>
                        <li>
                            <label for="Description">Description:</label>
                            <input className='text-field' type="description" id="description" required onChange={(e) => setDescription(e.target.value)} />
                        </li>
                        <li>
                            <button onClick={handleSave}>save</button>
                        </li>
                    </ul>

                </form>
            </div>

        </div>
    )
}
