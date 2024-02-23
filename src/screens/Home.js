import React, { useState, useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post_data';

export default function Home() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/posts/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, [])

    let navigate = useNavigate();
    const handleCreate = () => {
        navigate('/create-post');
    };

    return (
        <div className='home-body'>
            <div className='body-container'>
                <button className='create-post-btn' onClick={handleCreate}> Create new</button>
                <ul className='home-ul'>
                    {items.map((list, index) => (
                        <li className='post-style'>
                            <Post  data = {list}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
