import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";

const StyledCard = styled.article`
    ${CardStyling}
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