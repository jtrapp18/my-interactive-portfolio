// import { Card } from "semantic-ui-react";
// import ProjectFilter from "../components/ProjectFilter";
import WorkCard from "../components/WorkCard";
import data from "../data"
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
`

const RelevantWork = () => {
    const relevantWork = data.relevantWork;

    return (
        <main>
            {/* <ProjectFilter /> */}
            <CardContainer>
                {relevantWork.map(work=>
                    <WorkCard
                        key={work.name}
                        {...work}
                    />)}
            </CardContainer>
        </main>
    );
}

export default RelevantWork;
