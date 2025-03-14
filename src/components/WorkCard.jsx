import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling, CardHover } from "../MiscStyling";
import { useRef, useEffect } from "react";
import { useWindowWidth } from "../context/WindowWidthProvider";

const StyledCard = styled.section`
    ${CardStyling}

    height: ${(props) => props.isMobile ? '500px' : '400px'};
    max-height: 85vh;

    h2 {
      font-size: clamp(1.5rem, 3.4vw, 1.8rem);
    }

    h3 {
      font-size: clamp(1.2rem, 3vw, 1.2rem);
    }

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
      
    .line-break {
      border-top: 1px solid #E0E1DD;
      width: 90%; 
    }

    .proj-summary {
      height: 30%;
      width: 100%;
      justify-content: center;
    }

    .proj-details {
      overflow-Y: scroll;
      height: 0;
    }

    .language-tags {
      height: 30%;
    }

    .close {
      font-size: clamp(1.5rem, 4vw, 2rem);
      position: absolute;
      right: 10px;
      top: 10px;
    }

    &.expanded {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      padding: 2vh 1vw 2vh 1vw;

      top: 5vh;
      width: ${(props) => props.isMobile ? '96vw' : '80%'};
      height: 90%;
      max-height: 85vh;

      .proj-title {
        height: auto;
      }

      .proj-summary {
        height: auto;
      }

      .proj-details {
        height: auto;
        padding: 1%;
        margin: 2.5%;
        border: 3px double #C0C0C0;
      }

      .language-tags {
        height: auto;
      }
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
        <section className="line-break">
          <br />
        </section>
        <section className="proj-summary">
          <p>{summary}</p>
        </section>
        <section className="proj-details">
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
        <section className="language-tags" >
          <hr></hr>
          <Tags tags={areas} tagType="Areas of Practice"/>
          <Tags tags={languages} tagType="Languages Used"/>
        </section>
      </StyledCard>
  );
};

export default WorkCard; 