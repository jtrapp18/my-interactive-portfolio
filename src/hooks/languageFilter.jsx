import { useState } from "react";

const LanguageFilter = (projects) => {

const [filters, setFilters] = useState({
    "Python": true, 
    "React": true, 
    "JavaScript": true, 
    "CSS": true, 
    "HTML": true, 
    "VBA":true
})

const languageFilter = Object.keys(filters).filter(language => filters[language]===true)

const showProjects = filters.length === 0 
? projects 
: projects.filter(project =>
    new Set(project.languages).size > 0 &&
    new Set(languageFilter).size > 0 &&
    [...new Set(project.languages)].some(lang => new Set(languageFilter).has(lang))
    );

    return [filters, setFilters, showProjects]
}

export default LanguageFilter;