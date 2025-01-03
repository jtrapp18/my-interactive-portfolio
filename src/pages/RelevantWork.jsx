import WorkCard from "../components/WorkCard";
import data from "../data"
import styled from "styled-components";
import LanguageFilter from "../hooks/languageFilter";
import SideBar from "../components/SideBar";
import { useState } from "react";

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

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

const RelevantWork = () => {
    const relevantWork = data.relevantWork;
    const [activeProj, setActiveProj] = useState(null);
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(relevantWork)

    return (
        <StyledMain>
            <SideBar filters={filters} setFilters={setFilters} selectAll={selectAll} onSelectAll={onSelectAll}/>
            <div>
                <h3>Relevant Work Experience</h3>
                <p>Throughout my career as an actuary, I have worked on a variety of projects that required proficiency in coding and data management, utilizing tools and languages such as VBA, Microsoft Access, SQL, and Python.</p>
                <i>Below are some key highlights of my work. Click on any card for more details.</i>
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
