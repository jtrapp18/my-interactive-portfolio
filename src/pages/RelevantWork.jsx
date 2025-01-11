import WorkCard from "../components/WorkCard";
import data from "../data";
import styled from "styled-components";
import LanguageFilter from "../hooks/languageFilter";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { StyledMain } from "../MiscStyling";
import UseWindowWidth from "../hooks/windowSize";

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(clamp(300px, 100%, 350px), 1fr));
`

const RelevantWork = () => {
    const isMobile = UseWindowWidth();
    const relevantWork = data.relevantWork;
    const [activeProj, setActiveProj] = useState(null);
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(relevantWork)

    return (
        <StyledMain>
            {!isMobile && 
              <SideBar 
                filters={filters} 
                setFilters={setFilters} 
                selectAll={selectAll} 
                onSelectAll={onSelectAll} 
                projects={relevantWork}
              />}
            <div>
                <article>
                  <h1>Relevant Work Experience</h1>
                  <p>Throughout my career as an actuary, I have worked on a variety of projects that required proficiency in coding and data management, utilizing tools and languages such as VBA, Microsoft Access, SQL, and Python. Below are some key highlights of my work.</p>
                  <i>Click on any card for more details.</i>
                </article>
                <CardContainer>
                    {showProjects.map(work=>
                        <WorkCard
                            key={work.name}
                            {...work}
                            activeProj={activeProj}
                            setActiveProj={setActiveProj}
                        />)}
                </CardContainer>
            </div>
        </StyledMain>
    );
}

export default RelevantWork;
