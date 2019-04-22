import React from 'react';
import './Profile.css';

import Contact from '../../Contact/Contact';

import profile from './profile.png';
const Profile = ()=>{
    return(
            <div className='profile'>
                <img src={profile} alt='profile'></img>
                <h1>WHO I AM?</h1>
                <p>I am a autolearning front-end developer living in <span>Buenos Aires, ARG.</span></p>
                <div className='contact-profile'>
                    <Contact/>
                </div>
                
            </div>
    )
}

export default Profile;