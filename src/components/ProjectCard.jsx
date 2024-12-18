import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";

const StyledCard = styled.article`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    height: 450px;
    overflow: hidden;
    margin: 20px;
    padding: 20px;
    position: relative;

    span {
        top: 75%;
    }

    details div {
      display: flex;
      flex-direction: column;
    }

    details p {
      color: var(--dark-green);
      margin: 0;
      padding: 5px;
    }

    &:hover {
      background-color: gray;
      cursor: pointer;
    }

    details summary:hover {
        font-weight: bold;
        display: flex;
        flex-direction: column;
    }

    &:has(details[open]) {
        padding-bottom: 120px;
    }

    &:has(details[open]) span {
        top: 55%;
    }

    section {
      bottom: 0px;
      height: 50%;
      position: relative;

      img {
        position: absolute;
        bottom: 5%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
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