import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";

const StyledCard = styled.article`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    height: 500px;
    overflow: hidden;
    margin: 20px;
    position: relative;
    // width: 40%;

    h2, .rating {
        position: absolute;
        background-color: rgba(0,0,0,.5);
        margin-left: 5px;
        color: white;
    }

    span {
        top: 75%;
    }

    details p {
      color: var(--dark-green);
      margin: 0;
      padding: 0;
    }

    &:hover h2 {
      zoom: 130%;
    }

    details summary:hover {
        font-weight: bold;
    }

    &:has(details[open]) {
        padding-bottom: 75px;
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
        width: 95%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 85%;
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

function ProjectCard({name, phase, languages, description, image, gif}) {

  const params = useParams();

  return(  
      <StyledCard>
        <h2>{name}</h2>
        <h3>{`Phase ${phase}`}</h3>
        <ul>{languages.map(language=><li key={language}>{language}</li>)}</ul>
        <section className="img-container">
          <img src={image} alt={image} className="static" />
          <img src={gif} alt={gif} className="animated" />
        </section>
        <Tags tags={languages}/>
      </StyledCard>
  );
};

export default ProjectCard;