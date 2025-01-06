import SideBar from "../components/SideBar";
import ProjectCard from "../components/ProjectCard";
import data from "../data";
import styled from "styled-components";
import { useEffect, useState } from "react";
import LanguageFilter from "../hooks/languageFilter";
import { StyledMain } from "../MiscStyling";

const CardContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`

const Projects = () => {
    const projects = data.projects;
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(projects)

    return (
        <StyledMain>
            <SideBar filters={filters} setFilters={setFilters} selectAll={selectAll} onSelectAll={onSelectAll}/>
            <div>
              <article>
                <h3>Featured Projects</h3>
                <p>During my Software Engineering course at Flatiron School, I completed a series of both group and solo projects, which are described below.</p>
                <i>Click 'Details' on any card to learn more, or click the title to go to the project site.</i>
              </article>
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
