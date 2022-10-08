import React from 'react'
import Profile from '../img/Profile.jpg'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Frogy</span>
            
             <div className="user">
                 <img src={Profile} alt="" />
                 <span>Name</span>
                 <button>Logout</button>
             </div>
            </div>
            
        
    )
}
