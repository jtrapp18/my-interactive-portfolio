import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useRef, useEffect } from "react";
import { useWindowWidth } from "../context/WindowWidthProvider";

const StyledCard = styled.section`
    ${CardStyling}

    height: 400px;

    section {
      margin: 0;
    }

    .proj-title {
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      display: flex;
    }

    .proj-summary {
      height: 30%;
      width: 100%;
      justify-content: center;
    }

    .language-tags {
      height: 30%;
    }

    .proj-details {
      overflow-Y: scroll;
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    &.expanded {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;

      top: ${(props) => props.isMobile ? '0' : '5%'};
      width: ${(props) => props.isMobile ? '100%' : '60%'};
      height: ${(props) => props.isMobile ? '100%' : '80%'};      
    }
  `

function WorkCard({id, name, summary, languages, features, 
  technical, company, areas, image, activeProj, setActiveProj}) {

  const cardRef = useRef(null); // Create a reference to the card element
  const isMobile = useWindowWidth();

  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setActiveProj(null);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  const className = activeProj==id ? "expanded" : ""

  return(  
      <StyledCard 
        isMobile={isMobile} 
        ref={cardRef} 
        className={className}
        onClick={()=>setActiveProj(id)}
      >
        {className==="expanded" && <span className="close" onClick={()=>setActiveProj(null)}>✖</span>}
        <section className="proj-title">
          <h2>{name}</h2>
          <h3>{`For ${company}`}</h3>
        </section>
        <section className="proj-summary">
          <p>{summary}</p>
        </section>
        {className==="expanded" && (
          <section className="proj-details">
            <hr></hr>
            <h3>Key Features</h3>
            <ul>
              {features.map(feature=>(
                <li key={feature}>
                  {feature}
                </li>)
              )}
            </ul>
            <hr></hr>
            <h3>Technical Highlights</h3>
            <ul>
              {technical.map(bullet=>(
                <li key={bullet}>
                  {bullet}
                </li>)
              )}
            </ul>
          </section>
        )}
        <section className="language-tags" >
          <hr></hr>
          <Tags tags={areas} tagType="Areas of Practice"/>
          <Tags tags={languages} tagType="Languages Used"/>
        </section>
      </StyledCard>
  );
};

export default WorkCard; 