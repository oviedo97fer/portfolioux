import React from 'react';
import './Card.css';

const Card = (props)=>{
    return(
    <div className='Card'>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
        <div className='loader-circle'></div>
    </div>
    )
}

export default Card;