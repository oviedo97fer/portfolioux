import React, {Component} from 'react';
import './Projects.css';
import ProjectsComponent from './ProjectsComponent/ProjectsComponent';

class Projects extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return(
            <div className='Projects'>
                <div className='Projects-title'>
                    <div></div>
                    <h1>Projects</h1>
                </div>
            <div className='right-btn'><img src='./img/arrow.png'></img></div>
            <div className='left-btn'><img src='./img/arrow.png'></img></div>
                <div className='Projects-ex'>
                <ProjectsComponent
                    projectName='Saphira App'
                    projectImg='./img/SaphiraApp.png'
                />
                </div>
            </div>
        )
    }
}
export default Projects;