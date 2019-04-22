import React from 'react';
import './Profile.css';

import profile from './profile.png';
const Profile = ()=>{
    return(
            <div className='profile'>
                <img src={profile} alt='profile'></img>
                <h1>WHO I AM?</h1>
                <p>I am a autolearning front-end developer living in <span>Buenos Aires, ARG.</span></p>
            </div>
    )
}

export default Profile;