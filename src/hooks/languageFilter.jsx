import { useState } from "react";

const LanguageFilter = (projects) => {

const [languageFilter, setLanguageFilter] = useState([])

const showProjects = languageFilter.length === 0 
? projects 
: projects.filter(project =>
    new Set(project.languages).size > 0 &&
    new Set(languageFilter).size > 0 &&
    [...new Set(project.languages)].some(lang => new Set(languageFilter).has(lang))
    );

    return [languageFilter, setLanguageFilter, showProjects]
}

export default LanguageFilter;