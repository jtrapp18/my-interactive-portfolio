import React, {useState} from 'react';
import styled from 'styled-components';

const SidePanelContainer = styled.section`
    position:relative;
    padding: 20px;
    min-width: 200px;
    max-width: 20%;
    width: 15%;
    display: flex;
    flex-direction: column;
    // background-color: gray;
    border-right: 2px solid #C8C8C8;
    background: linear-gradient(to top, var(--light-green), white);
    // background-image: url('/images/birch_paneling.jpeg');
    // background-size: cover;
    // opacity: 0.8;
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

const SideBar = ({filters, setFilters, selectAll, onSelectAll}) => {
    
    const handleClick = (event) => {
        const name = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value

        setFilters(prevFilters => ({...prevFilters, [name]: value}))
    }

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
                <strong>Select All</strong>
            </label>
            {Object.keys(filters).map(language => 
                <label key={language}>
                    <input
                        checked={filters[language]}
                        type="checkbox"
                        name={language}
                        onChange={handleClick}
                    />
                    {language}
                </label>)
            }

        </SidePanelContainer>
    );
}

export default SideBar;
