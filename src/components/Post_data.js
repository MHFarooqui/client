import React from 'react'
import '../screens/Home.css'
import { AiFillLike } from "react-icons/ai";
import { FaRegShareSquare, FaCommentAlt, FaUser } from "react-icons/fa";

export default function Post(props) {
    return (
        <div>
            <div className='post-card'>
                <div className='home-li'>
                    <h5 >{props.data.title}</h5>
                    <hr />
                    <p>{props.data.body}</p>
                    <div className='post-bottons'>
                        <AiFillLike className='icons' /> {props.data.likes}
                        <FaRegShareSquare className='icons' /> {props.data.shares}
                        <FaCommentAlt className='icons' />
                    </div>
                </div>
                {props.data.comments.map((data, indx) => (
                    <>
                        <div className='comment-item'>
                            <span className='comment-author'><FaUser className='icons commnent-author-icon' />{data.name}</span>
                            <span>{data.text}</span>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )

}
