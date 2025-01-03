import { useParams, useOutletContext } from "react-router-dom";
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

    &:hover {
      cursor: pointer;
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
        object-fit: cover;
        overflow: hidden;
        border-radius: 5px;
        cursor: pointer;
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
const StyledDetails = styled.details`

  div {
    display: flex;
    flex-direction: column;
  }

  i, p, a {
    font-size: 15px;
  }

  .collaborator {
    margin-left: 20px;
  }

  summary:hover {
    font-weight: bold;
  }

  label, label a {
    font-size: 12px;
  }
`

function ProjectCard({name, phase, summary, languages, collaborators, 
  description, image, gif, website_link, repo_fe, repo_be}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    setIsOpen(e.target.open);
  };

  return(  
      <StyledCard>
        <h2>{name}</h2>
        {/* <p title={`Click to go to project site`} onClick={()=>window.open(website_link, "_blank")}>Go to Project Site</p> */}
        <section className={isOpen ? "hide" : ""}>
          <img src={image} alt={image} className="static" />
          <img src={gif} alt={gif} className="animated" />
        </section>
        <Tags tags={languages} tagType="Languages Used"/>
        <StyledDetails onToggle={handleToggle}>
            <summary>Details</summary>
            <div>
              <p>{summary}</p>
              <strong>Collaborators:</strong>
              {collaborators.map(collaborator =>
                <div key={collaborator.id}>
                  <a title={collaborator.link} href={collaborator.link} target="_blank" className="collaborator">{`>>${collaborator.name}`}</a>
                </div>
              )}
              <br/>
              <strong>Github Code Repositories:</strong>
              <label>Front-end: <a href={repo_fe} target="_blank">{repo_fe}</a></label>
              <label>Back-end: <a href={repo_be} target="_blank">{repo_be}</a></label>
              <br/>
              <i>{`This project was developed for the end of Phase ${phase} assignment for the FlatIron School Software Engineering Bootcamp`}</i>
            </div>
        </StyledDetails>
      </StyledCard>
  );
};

export default ProjectCard;