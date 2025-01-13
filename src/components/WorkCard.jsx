import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useRef, useEffect } from "react";
import { scrollToTop } from "../helper";
import { useWindowWidth } from "../context/WindowWidthProvider";

const StyledCard = styled.section`
    ${CardStyling}

    .proj-details {
      overflow-Y: scroll;
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;

    }

    &.collapsed {
      opacity: .3;
      pointer-events: none;
    }

    &.expanded {
      position: absolute;
      bottom: 1%;
      width: 70%;
      left: 50%;
      height: 90%;
      transform: translateX(-50%);
      z-index: 10;
    }

    .language-tags {
      bottom: 0px;
      height: 150px;
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

  const handleClick = () => {
    setActiveProj(id);
    scrollToTop();
  }

  let className
  switch (activeProj) {
    case null:
      className = "";
      break;
    case id:
      className = "expanded";
      break;
    default:
      className = "collapsed";
  }

  return(  
      <StyledCard isMobile={isMobile} ref={cardRef} className={className} onClick={handleClick}>
        {className==="expanded" && <span className="close" onClick={()=>setActiveProj(null)}>✖</span>}
        <h2>{name}</h2>
        <h3>{`For ${company}`}</h3>
        <p>{summary}</p>
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