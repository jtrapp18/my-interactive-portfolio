import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useRef, useEffect } from "react";
import { scrollToTop } from "../helper";

const StyledCard = styled.article`
    ${CardStyling}
    cursor: pointer;

    section {
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
      bottom: 0px;
      width: 500px;
      left: 50%;
      height: 600px;
      max-height: 80%;
      transform: translateX(-50%);
      max-width: 70%;
      z-index: 10;
    }
  `

function WorkCard({id, name, summary, languages, features, 
  year, company, areas, image, activeProj, setActiveProj}) {

  const cardRef = useRef(null); // Create a reference to the card element

  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setActiveProj(null);
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
      <StyledCard ref={cardRef} className={className} onClick={handleClick}>
        {className==="expanded" && <span className="close" onClick={()=>setActiveProj(null)}>✖</span>}
        <h2>{name}</h2>
        <h3>{`For ${company}`}</h3>
        <p>{summary}</p>
        {className==="expanded" && (
          <section>
            <hr></hr>
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
        <hr></hr>
        <Tags tags={areas} tagType="Areas of Practice"/>
        <Tags tags={languages} tagType="Languages Used"/>
      </StyledCard>
  );
};

export default WorkCard; 