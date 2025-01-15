import WorkCard from "../components/WorkCard";
import data from "../data";
import styled from "styled-components";
import LanguageFilter from "../hooks/languageFilter";
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import { StyledMain, Overlay } from "../MiscStyling";
import { useWindowWidth } from "../context/WindowWidthProvider";

// Styled Components
const CardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(300px, 100%, 350px), 1fr));
  gap: 1rem;
  position: relative;
`;

// RelevantWork Component
const RelevantWork = () => {
  const isMobile = useWindowWidth();
  const relevantWork = data.relevantWork;
  const [activeProj, setActiveProj] = useState(null);
  const [filters, setFilters, showProjects, selectAll, onSelectAll] = LanguageFilter(relevantWork);

  // Disable scrolling when there's an active project
  useEffect(() => {
    if (activeProj !== null) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up when component unmounts or activeProj changes
    };
  }, [activeProj]);

  return (
    <StyledMain isMobile={isMobile}>
      {!isMobile && (
        <SideBar
          filters={filters}
          setFilters={setFilters}
          selectAll={selectAll}
          onSelectAll={onSelectAll}
          projects={relevantWork}
        />
      )}
      <div className="main-content">
        <article className="page-header">
          <h1>Relevant Work Experience</h1>
          <p>
            Throughout my career as an actuary, I have worked on a variety of projects that required
            proficiency in coding and data management, utilizing tools and languages such as VBA,
            Microsoft Access, SQL, and Python. Below are some key highlights of my work.
          </p>
          <i>Click on any card for more details.</i>
        </article>
        <Overlay isVisible={activeProj !== null} />
        <CardContainer>
          {showProjects.map((work) => (
            <WorkCard
              key={work.name}
              {...work}
              activeProj={activeProj}
              setActiveProj={setActiveProj}
            />
          ))}
        </CardContainer>
      </div>
    </StyledMain>
  );
};

export default RelevantWork;
