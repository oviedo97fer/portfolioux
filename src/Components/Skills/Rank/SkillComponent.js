import React from 'react';

const SkillComponent = (props)=>{
    return(
        <div className='skill-component'>
            <h1>{props.skill}</h1>
            <div className='skill-loader'>
            <div></div>
              <div></div>
            </div>
        </div>
    )
}

export default SkillComponent;
