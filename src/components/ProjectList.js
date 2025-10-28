import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const mappedProjects=projects.map(pro=>{
    return(
      <ProjectItem 
        id={pro.id}
        key={pro.id}
        technologies={pro.technologies}
        about={pro.about}
        name={pro.name}
      />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{mappedProjects}</div>
    </div>
  );
}

export default ProjectList;
