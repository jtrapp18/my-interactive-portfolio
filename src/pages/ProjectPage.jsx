import { Card } from "semantic-ui-react";
import ProjectFilter from "../components/ProjectFilter";
import ProjectCard from "../components/ProjectCard";
import data from "../data"

const ProjectPage = () => {
    const projects = data.projects;

    return (
        <main>
            <p>This is the project page!</p>
        </main>
    );
}

export default ProjectPage;
