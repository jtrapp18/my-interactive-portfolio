import { useParams, useOutletContext } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { useState } from "react";
import { CardStyling } from "../MiscStyling";
import { useWindowWidth } from "../context/WindowWidthProvider";

const StyledCard = styled.section`
    ${CardStyling}
    
    h2 {
      height: 10%;
    }

    .proj-img {
      width: 100%;
      height: 70%;
      position: relative;

      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }
    }

    .language-tags {
      bottom: 0%;
      height: 15%;
    }

    .animated {
      opacity: 0;
    }

    &:hover .static {
      opacity: 0;
    }

    &:hover .animated {
      opacity: 1;
    }
  }
  `

function ProjectCard({id, name, languages, image, gif}) {
  const navigate = useNavigate();
  const isMobile = useWindowWidth();

  function handleClick() {
    navigate(`/projects/${id}`);
  }

  return(  
    
      <StyledCard isMobile={isMobile} onClick={handleClick}>
        <h2>{name}</h2>
        <section className="proj-img">
          <img src={`${import.meta.env.BASE_URL}${image}`} alt={image} className="static" />
          <img src={`${import.meta.env.BASE_URL}${gif}`} alt={gif} className="animated" />
        </section>
        <section className="language-tags" >
          <hr></hr>
          <Tags tags={languages} tagType="Languages Used"/>
        </section>
      </StyledCard>
  );
};

export default ProjectCard;