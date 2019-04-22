import React, { Component } from 'react';
import './Skills.css';
import Profile from './Profile/Profile';
import Rank from './Rank/Rank';

class Skills extends Component{

    render(){
        return(
            <div className='Skills'>
                <Profile/>
                <div className='skills-div'>
                    <div className='Rank-div'><Rank/></div>
                </div>
            </div>
        )
    }
}

export default Skills;