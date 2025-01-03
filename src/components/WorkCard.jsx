import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useRef, useEffect } from "react";

const StyledCard = styled.article`
    ${CardStyling}
    cursor: pointer;

    section {
      overflow-X: scroll;
    }

    &.collapsed {
      opacity: .3;
      pointer-events: none;
    }

    &.expanded {
      position: absolute;
      bottom: 0px;
      width: 50%;
      left: 50%;
      height: 600px;
      transform: translateX(-50%);
      min-width: 500px;
      z-index: 10;
    }
  `

function WorkCard({id, name, summary, languages, features, 
  year, company, areas, image, activeProj, setActiveProj}) {

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
        <p>{summary}</p>
        <Tags tags={areas} tagType="Areas of Practice"/>
        <Tags tags={languages} tagType="Languages Used"/>
        {className==="expanded" && (
          <section>
            <h3>Features</h3>
            <ul>
              {features.map(feature=>(
                <li key={feature}>
                  {feature}
                </li>)
              )}
            </ul>
          </section>
        )}
      </StyledCard>
  );
};

export default WorkCard; 