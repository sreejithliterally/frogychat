import React from 'react'
import Profile from '../img/Profile.jpg'

export const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={Profile} alt="" />

                <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
                </div>
            
            </div>


        </div>
    )
}
