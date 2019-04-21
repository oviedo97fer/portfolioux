import React, {Component} from 'react';
import './Banner.css';
import Card from './Card/Card';

//Components



class Banner extends Component{

    render(){
        return(
            <div className='Banner'>
                <div className='backg'></div>
                 <div className='cards'>
                 <Card
                  title='WEB DESIGN'
                  subtitle='style. beauty.'
                  />
                  <Card
                  title='MOBILE DESIGN'
                  subtitle='responsive. powerful.'
                  />
                  <Card
                  title='DIGITAL MKT'
                  subtitle='launch. convert.'
                  />
                 </div>
                 
            </div>
        )
    }
}
export default Banner;