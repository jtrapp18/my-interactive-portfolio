
import data from "../data"
import { useParams } from "react-router-dom";
import GitHubReadme from "../components/GitHubReadme";
import styled from "styled-components";

const StyledMain = styled.main`
    margin: 50px;

    h2 {
        margin: 0;
    }

    article {
        display: flex;
    }
`

const ProjectPage = () => {
    const projects = data.projects;

    const { id } = useParams(); 
    const project = projects.find((project) => project.id === parseInt(id));

    return (
        <StyledMain>
            <h2>{`Featured Project: ${project.name}`}</h2>
            <p>{`This project was developed for the end of Phase ${project.phase} assignment for the FlatIron School Software Engineering Bootcamp`}</p>
            <article>
                <span><a title={project.repo_fe} href={project.repo_fe} target="_blank">Github Repo</a></span>
                {project.website_link && (<span> | <a title={project.website_link} href={project.website_link} target="_blank">Deployed Project</a></span>)}
            </article>
            <br />
            <br />
            <GitHubReadme 
                readMeLink={project.readme}
            />
        </StyledMain>
    );
}

export default ProjectPage;
