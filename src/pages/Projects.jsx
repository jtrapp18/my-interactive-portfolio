import SideBar from "../components/SideBar";
import ProjectCard from "../components/ProjectCard";
import data from "../data"
import styled from "styled-components";
import { useEffect, useState } from "react";
import LanguageFilter from "../hooks/languageFilter";

const StyledMain = styled.main`
  display: flex;

  div > h3 {
    padding-top: 20px;
    margin: 20px;
  }
`

const CardContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  flex: 1;
`

const Projects = () => {
    const projects = data.projects;
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(projects)

    return (
        <StyledMain>
            <SideBar filters={filters} setFilters={setFilters} selectAll={selectAll} onSelectAll={onSelectAll}/>
            <div>
                <h3>Throughout my Software Engineering course at FlatIron School, I worked on a series of projects</h3>
                <CardContainer>
                    {showProjects.map(project=>
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />)}
                </CardContainer>
            </div>
        </StyledMain>
    );
}

export default Projects;
