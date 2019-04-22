import React from 'react';
import './Rank.css';
import SkillComponent from './SkillComponent';

const Rank = ()=>{
    return(
        <div className='Rank'>
            <SkillComponent skill='JS'/>
            <SkillComponent skill='REACT'/>
            <SkillComponent skill='UX'/>
            <SkillComponent skill='PSD'/>
            <SkillComponent skill='NODEJS'/>
            <SkillComponent skill='EXPRESS'/>
            <SkillComponent skill='MKTDG'/>
        </div>
    )
}

export default Rank;