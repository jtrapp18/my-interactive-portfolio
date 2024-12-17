import { Card } from "semantic-ui-react";
import ProjectFilter from "../components/ProjectFilter";
import ProjectCard from "../components/ProjectCard";
import data from "../data"

const ProjectPage = () => {
    const projects = data.projects;

    return (
        <main>
            <ProjectFilter />
            <Card.Group itemsPerRow={2}>
                {projects.map(project=>
                    <ProjectCard
                        key={project.name}
                        {...project}
                    />)}
            </Card.Group>
        </main>
    );
}

export default ProjectPage;
