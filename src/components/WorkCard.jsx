import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useRef, useEffect } from "react";

const StyledCard = styled.article`
    ${CardStyling}
    cursor: pointer;

    &.collapsed {
      opacity: .3;
      pointer-events: none;
    }

    &.expanded {
      position: absolute;
      width: 50%;
      left: 50%;
      transform: translateX(-50%);
      max-width: none;
      z-index: 10;
    }
  `

function WorkCard({id, name, summary, languages, description, year, company, areas, image, activeProj, setActiveProj}) {

  const cardRef = useRef(null); // Create a reference to the card element

  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      console.log("clicked outside");
      setActiveProj(null);
    } else {
      console.log("clicked inside");
    }
  };

  useEffect(() => {
    console.log("Event listener added");
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      console.log("Event listener removed");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  const handleClick = () => {
    setActiveProj(id);
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
      <StyledCard ref={cardRef} className={className} onClick={handleClick}>
        <h2>{name}</h2>
        <h3>{company}</h3>
        <Tags tags={areas} tagType="Areas of Practice"/>
        <p>{summary}</p>
        <p>{description}</p>
        <Tags tags={languages} tagType="Languages Used"/>
      </StyledCard>
  );
};

export default WorkCard; 