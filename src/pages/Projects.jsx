// import { Card } from "semantic-ui-react";
import ProjectFilter from "../components/ProjectFilter";
import ProjectCard from "../components/ProjectCard";
import data from "../data"
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
`

const Projects = () => {
    const projects = data.projects;

    return (
        <main>
            <ProjectFilter />
            <CardContainer>
                {projects.map(project=>
                    <ProjectCard
                        key={project.name}
                        {...project}
                    />)}
            </CardContainer>
        </main>
    );
}

export default Projects;
