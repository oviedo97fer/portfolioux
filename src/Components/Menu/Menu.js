import React from 'react';
import './Menu.css';

import wolf from './wolf.png';

const Menu = ()=>{
    return(
        <div className='Menu'>
            <img alt='wolf' src={wolf}></img>
            <ul>
                <li> <a href='#Skills'>WHO I AM?</a></li>
                <li><a href='#Projects'>PROJECTS</a></li>
                <li><a href='#Footer'>CONTACT</a></li>
            </ul>
        </div>
    )
}
export default Menu;