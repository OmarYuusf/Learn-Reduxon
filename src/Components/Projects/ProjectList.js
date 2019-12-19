import React from 'react';
import ProjectSummery from "./ProjectSummery"


const ProjectList = (props) => {
    return (
        <div className="projetc-list section">
            {props.projects.map(items => {
                return (
                    <ProjectSummery projects={items} key={items.id}/>
                )
            })}
        </div>
    );
};

export default ProjectList;