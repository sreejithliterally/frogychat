import React from 'react'
import Add from '../img/Add.png'

export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>
                <span className='logo1'>Hellow</span> <span className='logo2'>Frogy</span></span>
                <span className='title'>Register</span>
                

                <form>
                    <input type='text' placeholder='username'/>
                    <input type='email'placeholder='email'/>
                    <input type='password'placeholder='password'/>

                    <input style={{display:"none"}} type="file" id="file/"></input>
                    <label htmlFor="file">
                        <img src={Add} alt=""/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Have an account already? Login</p>


            </div>
            
        </div>
    )
}
