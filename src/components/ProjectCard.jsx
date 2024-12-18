import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";

const StyledCard = styled.article`
    ${CardStyling}

    &:hover {
      cursor: pointer;
    }

    section {
      img {
        position: absolute;
        bottom: 5%;
        box-shadow: var(--shadow);
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 5px;
        cursor: pointer;
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
function ProjectCard({name, phase, summary, languages, collaborators, 
  description, image, gif, website_link, repo_fe, repo_be}) {

  return(  
      <StyledCard>
        <h2 onClick={()=>window.open(website_link, "_blank")}>{name}</h2>
        <p>{summary}</p>
        <section>
          <img src={image} alt={image} className="static" />
          <img src={gif} alt={gif} className="animated" />
        </section>
        <Tags tags={languages}/>
        <details>
            <summary>Details</summary>
            <div>
              <p>{`Phase ${phase} Project for FlatIron School Software Engineering Bootcamp`}</p>
              <a href={repo_fe}>Front-end Repository</a>
              <a href={repo_be}>Back-end Repository</a>
              <strong>Collaborators:</strong>
              {collaborators.map(collaborator =>
                <div id={collaborator.name}>
                  <a href={collaborator.link}>{collaborator.name}</a>
                </div>
              )}
            </div>
        </details>
      </StyledCard>
  );
};

export default ProjectCard;