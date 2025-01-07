import { useParams, useOutletContext } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { useState } from "react";
import { CardStyling } from "../MiscStyling";

const StyledCard = styled.article`
    ${CardStyling}

    h2:hover {
      color: blue;
      text-decoration: underline;
    }

    section {
      height: 275px;
      left: 50%;
      transform: translateX(-50%);

      img {
        position: absolute;
        top: 0px;
        box-shadow: var(--shadow);
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 5px;
      }

      &.hide {
        display: None;
      }
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

function ProjectCard({id, name, phase, summary, languages, collaborators, 
  description, image, gif, website_link, repo_fe, repo_be}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (e) => {
    setIsOpen(e.target.open);
  };

  function handleClick() {
    navigate(`/projects/${id}`);
  }

  return(  
    
      <StyledCard onClick={handleClick}>
        <h2><a title={website_link} href={website_link} target="_blank">{name}</a></h2>
        <section className={isOpen ? "hide" : ""}>
          <img src={`${import.meta.env.BASE_URL}${image}`} alt={image} className="static" />
          <img src={`${import.meta.env.BASE_URL}${gif}`} alt={gif} className="animated" />
        </section>
        <hr></hr>
        <Tags tags={languages} tagType="Languages Used"/>
      </StyledCard>
  );
};

export default ProjectCard;