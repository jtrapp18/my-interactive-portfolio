import SideBar from "../components/SideBar";
import ProjectCard from "../components/ProjectCard";
import data from "../data"
import styled from "styled-components";
import { useEffect, useState } from "react";
import LanguageFilter from "../hooks/languageFilter";

const StyledMain = styled.section`
  display: flex;
`

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  flex: 1;

//   > div {
//     padding: 20px;
//   }
`

const Projects = () => {
    const projects = data.projects;
    const [languageFilter, setLanguageFilter, showProjects] = LanguageFilter(projects)

    return (
        <StyledMain>
            <SideBar setLanguageFilter={setLanguageFilter}/>
            <CardContainer>
                {showProjects.map(project=>
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />)}
            </CardContainer>
        </StyledMain>
    );
}

export default Projects;
