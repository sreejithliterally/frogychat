import React from 'react'
import Profile from '../img/Profile.jpg'

export const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="enter name to search" />
            </div>
            <div className="userChat">
                <img src={Profile}/>
             <div className="userChatInfo">
             <span>Sree</span>
             </div>
            </div>
            
        </div>
    )
}
