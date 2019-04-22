import React, { Component } from 'react';
import './Skills.css';
import Profile from './Profile/Profile';

class Skills extends Component{

    render(){
        return(
            <div className='Skills'>
                <Profile/>
                <div className='skills-div'></div>
            </div>
        )
    }
}

export default Skills;