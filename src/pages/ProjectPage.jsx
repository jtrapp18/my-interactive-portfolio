
import data from "../data"
import { useParams } from "react-router-dom";
import GitHubReadme from "../components/GitHubReadme";
import styled from "styled-components";

const StyledMain = styled.main`
    // padding-top: 100px;
    margin: 50px;
`

const ProjectPage = () => {
    const projects = data.projects;

    const { id } = useParams(); 
    const project = projects.find((project) => project.id === parseInt(id));

    return (
        <StyledMain>
            <h1>{`Featured Project: ${project.name}`}</h1>
            <p>{`This project was developed for the end of Phase ${project.phase} assignment for the FlatIron School Software Engineering Bootcamp`}</p>
            <i><a title={project.repo_fe} href={project.repo_fe} target="_blank">Navigate to Github Repo</a></i>
            <br />
            <br />
            <GitHubReadme 
                readMeLink={project.readme}
            />
        </StyledMain>
    );
}

export default ProjectPage;
