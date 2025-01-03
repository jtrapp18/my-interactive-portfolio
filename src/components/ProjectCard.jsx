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
const StyledDetails = styled.details`

  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
  }

  i, p, a {
    font-size: 15px;
  }

  .indent {
    margin-left: 20px;
  }

  summary:hover {
    cursor: pointer;
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
        <h2><a title={website_link} href={website_link} target="_blank">{name}</a></h2>
        <section className={isOpen ? "hide" : ""}>
          <img src={image} alt={image} className="static" />
          <img src={gif} alt={gif} className="animated" />
        </section>
        
        <StyledDetails onToggle={handleToggle}>
            <summary>Details</summary>
            <div>
              <p>{summary}</p>
              {collaborators.length > 0 &&
              <>
                <strong>Collaborators:</strong>
                <div className="indent">
                  {collaborators.map(collaborator =>
                    <div key={collaborator.id}>
                      <a title={collaborator.link} href={collaborator.link} target="_blank">{`>>${collaborator.name}`}</a>
                    </div>
                  )}
                  <br/>
                </div>
              </>
              }
              <strong>Github Code Repositories:</strong>
              <div className="indent">
                <a title={repo_fe} href={repo_fe} target="_blank">{`>>Front-End`}</a>
                {repo_be != null && 
                    <a title={repo_be} href={repo_fe} target="_blank">{`>>Back-End`}</a>
                }
              </div>
              <br/>
              <i>{`This project was developed for the end of Phase ${phase} assignment for the FlatIron School Software Engineering Bootcamp`}</i>
            </div>
        </StyledDetails>
        <hr></hr>
        <Tags tags={languages} tagType="Languages Used"/>
      </StyledCard>
  );
};

export default ProjectCard;