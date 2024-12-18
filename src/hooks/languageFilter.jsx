import { useState } from "react";

const LanguageFilter = (projects) => {

const allFilters = {
    "Python": true, 
    "React": true, 
    "JavaScript": true, 
    "CSS": true, 
    "HTML": true, 
    "VBA": true  
}

const noFilters = {
    "Python": false, 
    "React": false, 
    "JavaScript": false, 
    "CSS": false, 
    "HTML": false, 
    "VBA": false  
}

const [selectAll, setSelectAll] = useState(true);
const [filters, setFilters] = useState(allFilters)

const onSelectAll = () => {
    setSelectAll(selectAll=> {
        if (selectAll) {
            setFilters(noFilters);
        }
        else {
            setFilters(allFilters);
        }         
        
        return !selectAll});
}

const languageFilter = Object.keys(filters).filter(language => filters[language]===true)

const showProjects = languageFilter.length === 0 
? projects 
: projects.filter(project =>
    new Set(project.languages).size > 0 &&
    new Set(languageFilter).size > 0 &&
    [...new Set(project.languages)].some(lang => new Set(languageFilter).has(lang))
    );

    return [filters, setFilters, showProjects, selectAll, onSelectAll]
}

export default LanguageFilter;