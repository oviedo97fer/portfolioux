import React from 'react';
import './ProjectsComponent.css';

const ProjectsComponent = (props)=>{
        return(
            <div className='ProjectsComponent'>
                <h1>{props.projectName}</h1>
                <img alt='project' src={props.projectImg}></img>
                <div className='View-btn'><a>View</a></div>
            </div>
        )
    }

export default ProjectsComponent;