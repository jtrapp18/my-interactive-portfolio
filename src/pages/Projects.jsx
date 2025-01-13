import SideBar from "../components/SideBar";
import ProjectCard from "../components/ProjectCard";
import data from "../data";
import styled from "styled-components";
import LanguageFilter from "../hooks/languageFilter";
import { StyledMain } from "../MiscStyling";
import { useWindowWidth } from "../context/WindowWidthProvider";

const CardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 100%, 500px), 1fr));
`

const Projects = () => {
    const isMobile = useWindowWidth();
    const projects = data.projects;
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(projects)

    return (
        <StyledMain isMobile={isMobile}>
            {!isMobile && 
              <SideBar 
                filters={filters} 
                setFilters={setFilters} 
                selectAll={selectAll} 
                onSelectAll={onSelectAll} 
                projects={projects}
              />}
            <div className='main-content'>
              <article className='page-header'>
                <h1>Featured Projects</h1>
                <p>During my Software Engineering course at Flatiron School, I completed a series of both group and solo projects, which are described below.</p>
                <i>Click on any card for more details.</i>
                <hr />
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
