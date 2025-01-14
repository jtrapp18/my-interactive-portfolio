import { useParams, useOutletContext } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useWindowWidth } from "../context/WindowWidthProvider";

const StyledCard = styled.section`
    ${CardStyling}

    section {
      margin: 0;
    }
    
    .proj-title {
      height: 10%;
      align-items: end;
      display: flex;
    }

    .proj-img {
      width: 100%;
      height: 65%;
      position: relative;
      overflow: hidden;
      border-top: double 3px var(--green);
      border-bottom: double 3px var(--green);

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        z-index: 0;
      }
    }
    
    .proj-summary {
      height: 10%;
      width: 100%;
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

function ProjectCard({id, name, summary, languages, image, gif}) {
  const navigate = useNavigate();
  const isMobile = useWindowWidth();

  function handleClick() {
    navigate(`/projects/${id}`);
  }

  return(  
    
      <StyledCard isMobile={isMobile} onClick={handleClick}>
        <section className="proj-title">
          <h2>{name}</h2>
        </section>
        <section className="proj-img">
          <img src={`${import.meta.env.BASE_URL}${image}`} alt={image} className="static" />
          <img src={`${import.meta.env.BASE_URL}${gif}`} alt={gif} className="animated" />
        </section>
        <section className="proj-summary">
          <p>{summary}</p>
        </section>
        <section className="language-tags" >
          <hr></hr>
          <Tags tags={languages} tagType="Languages Used"/>
        </section>
      </StyledCard>
  );
};

export default ProjectCard;