import SideBar from "../components/SideBar";
import ProjectCard from "../components/ProjectCard";
import data from "../data";
import styled from "styled-components";
import LanguageFilter from "../hooks/languageFilter";
import { StyledMain } from "../MiscStyling";
import UseWindowWidth from "../hooks/windowSize";

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 100%, 500px), 1fr));
`

const Projects = () => {
    const isMobile = UseWindowWidth();
    const projects = data.projects;
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(projects)

    return (
        <StyledMain>
            {!isMobile && <SideBar filters={filters} setFilters={setFilters} selectAll={selectAll} onSelectAll={onSelectAll}/>}
            <div>
              <article>
                <h1>Featured Projects</h1>
                <p>During my Software Engineering course at Flatiron School, I completed a series of both group and solo projects, which are described below.</p>
                <i>Click on any card for more details.</i>
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
