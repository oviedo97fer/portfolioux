import React, {Component} from 'react';
import './Home.css';
import fernando from './fernando.png';
import raton from './raton.gif';

//Components
import Contact from '../Contact/Contact';
import Logo from './Logo';


class Home extends Component{
    render(){
        return(
            <div className='Home'>
                  <div className='Title'>
                    <h1>Fernando<br></br>Oviedo</h1>
                    <h4>2019</h4>
                  </div>
                  <div className='Logo-Home'>
                    <Logo/>
                  </div>
                  <div className='Btn-Contact'>
                    <Contact/>
                  </div>
                  <div className='Dev-img'>
                    <img alt='FernandoOviedo' src={fernando}></img>
                  </div>
                  <div className='Down'>
                    <a href='#banner'><img alt='mouse' src={raton}></img></a>
                  </div>
            </div>
        )
    }
}
export default Home;