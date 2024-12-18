import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";

const StyledCard = styled.article`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    height: 500px;
    overflow: hidden;
    margin: 20px;
    padding: 20px;
    position: relative;

    span {
        top: 75%;
    }

    details p {
      color: var(--dark-green);
      margin: 0;
      padding: 0;
    }

    &:hover {
      background-color: gray;
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

    img {
      position: absolute;
      bottom: 5%;
      width: 50%;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
      object-fit: cover;
      overflow: hidden;
      border-radius: 5px;
      // cursor: pointer;
    }
  }
  `

function WorkCard({id, name, summary, languages, description, year, company, areas, image}) {

  return(  
      <StyledCard>
        <h2>{name}</h2>
        <h3>{company}</h3>
        <Tags tags={areas}/>
        {/* <img src={image} alt={image} /> */}
        <p>{summary}</p>
        <p>{description}</p>
        <Tags tags={languages}/>
      </StyledCard>
  );
};

export default WorkCard; 