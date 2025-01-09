import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const SidePanelContainer = styled.section`
    position: relative;
    padding: 20px;
    width: 200px;
    min-width: 5%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #C8C8C8;
    resize: horizontal;

    &input[type="checkbox"]:hover {
        background-color: var(--navy);
    }
}
`;

const ClearFilter = styled.p`
    font-style: italic;
    color: gray;
    size: 10px;

    &:hover {
        font-weight: bold;
        cursor: pointer;
        color: red;
    }
`;

const SideBar = ({ filters, setFilters, selectAll, onSelectAll, projects }) => {
    const handleClick = (event) => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    }

    // Ensure projects is defined and calculate the usedLanguages set
    const usedLanguages = useMemo(() => {
        // If there are no projects or languages, return an empty set
        if (!projects || projects.length === 0) return new Set();

        return new Set(
            projects.flatMap(project => project.languages) // Collect languages from all projects
        );
    }, [projects]);

    return (
        <SidePanelContainer className="side-panel">
            <h2>Apply Filters</h2>
            <h3>Languages</h3>
            <label>
                <input
                    checked={selectAll}
                    type="checkbox"
                    name="selectAll"
                    onChange={onSelectAll}
                />
                <strong>{selectAll ? "Deselect All" : "Select All"}</strong>
            </label>
            {Object.keys(filters).map(language => 
                <label key={language}>
                    <input
                        checked={filters[language]}
                        type="checkbox"
                        name={language}
                        onChange={handleClick}
                        disabled={!usedLanguages.has(language)}  // Disable input if the language is not in usedLanguages
                    />
                    {language}
                </label>
            )}
        </SidePanelContainer>
    );
}

export default SideBar;