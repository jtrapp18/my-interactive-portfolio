import SideBar from "../components/SideBar";
import ProjectCard from "../components/ProjectCard";
import data from "../data"
import styled from "styled-components";
import { useEffect, useState } from "react";
import LanguageFilter from "../hooks/languageFilter";

const StyledMain = styled.main`
  display: flex;
  div {
    width: 100%;
  }

  div > h3 {
    padding-top: 20px;
  }
  div > h3, div > p, div > i {
    margin: 20px;
  }
`

const CardContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

const Projects = () => {
    const projects = data.projects;
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(projects)

    return (
        <StyledMain>
            <SideBar filters={filters} setFilters={setFilters} selectAll={selectAll} onSelectAll={onSelectAll}/>
            <div>
              <h3>Featured Projects</h3>
              <p>During my Software Engineering course at Flatiron School, I completed several impactful projects.</p>
              <i>Explore the projects below and click 'Details' on any card to learn more.</i>
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
