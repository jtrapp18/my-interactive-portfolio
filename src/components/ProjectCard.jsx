import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tags from "./Tags";
import { CardStyling } from "../MiscStyling";
import { useWindowWidth } from "../context/WindowWidthProvider";

const StyledCard = styled.section`
  ${CardStyling}

  height: 500px;

  section {
    // margin: 0;
  }

  &.focused {
    z-index: 2;
  }

  .proj-title {
    height: 10%;
    justify-content: end;
    display: flex;
    flex-direction: column;
  }

  .proj-img {
    width: 100%;
    height: 60%;
    position: relative;
    overflow: hidden;
    border-top: double 3px var(--green);
    border-bottom: double 3px var(--green);
    background: black;

    img {
      position: absolute;
      left: 0;
      width: 100%;
      object-fit: cover;
      object-position: top;
      z-index: 0;

      top: ${(props) => props.isMobile ? '50%' : '0%'};
      transform: ${(props) => props.isMobile ? 'translateY(-50%)' : ''};
    }
  }

  .proj-summary {
    height: 15%;
    width: 100%;
  }

  .language-tags {
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
`;

function ProjectCard({ id, name, summary, languages, image, gif, activeProj, setActiveProj }) {
  const navigate = useNavigate();
  const isMobile = useWindowWidth();

  // Function to handle the click event
  function handleClick() {
    navigate(`/projects/${id}`);
  }

  return (
    <StyledCard
      className={activeProj === id ? "focused" : ""}
      isMobile={isMobile}
      onClick={handleClick}
      onMouseOver={() => setActiveProj(id)}
      onMouseOut={() => setActiveProj(null)}
    >
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
      <section className="language-tags">
        <hr />
        <Tags tags={languages} tagType="Languages Used" />
      </section>
    </StyledCard>
  );
}

export default ProjectCard;