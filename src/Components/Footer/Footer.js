import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{

    render(){
        return(
            <div className='Footer'>
                <div className='Contact-form'>
                
                </div>
                <div className='foot'>
                    <div className='up-btn'>
                        <img alt='arrow' src='./img/arrow-up.png'></img>
                    </div>
                    <div className='social'></div>
                    <h3>Fernando Oviedo <span>2019</span></h3>
                </div>
            </div>
        )
    }
}

export default Footer;