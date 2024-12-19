import WorkCard from "../components/WorkCard";
import data from "../data"
import styled from "styled-components";
import LanguageFilter from "../hooks/languageFilter";
import SideBar from "../components/SideBar";
import { useState } from "react";

const StyledMain = styled.section`
  display: flex;
`

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
`

const RelevantWork = () => {
    const relevantWork = data.relevantWork;
    const [activeProj, setActiveProj] = useState(null);
    const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(relevantWork)

    return (
        <StyledMain>
            <SideBar filters={filters} setFilters={setFilters} selectAll={selectAll} onSelectAll={onSelectAll}/>
            <CardContainer>
                {showProjects.map(work=>
                    <WorkCard
                        key={work.name}
                        {...work}
                        activeProj={activeProj}
                        setActiveProj={setActiveProj}
                    />)}
            </CardContainer>
        </StyledMain>
    );
}

export default RelevantWork;
