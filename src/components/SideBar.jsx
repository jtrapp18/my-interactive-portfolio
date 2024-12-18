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
    background-color: gray;
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

const SideBar = ({filters, setFilters}) => {
    
    const handleClick = (event) => {
        const name = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value

        setFilters(prevFilters => ({...prevFilters, [name]: value}))
    }

    // const clearFilter = (filterType) => {

    //     switch (filterType) {
    //         case "status":
    //             setFilterInput(prevFilter=>{
    //                 return {
    //                     ...prevFilter,
    //                     complete: true,
    //                     incomplete: true,
    //                 }
    //             });
    //             break;
    //         case "dates":
    //             setFilterInput(prevFilter=>{
    //                 return {
    //                     ...prevFilter,
    //                     startDate: "",
    //                     endDate: "",
    //                 }
    //             });
    //             break;
    //         case "rating":
    //             updateRating(0)
    //             break;
    //         default:
    //             break;
    //     }
    // }

    return (
        <SidePanelContainer className="side-panel">
            <h2>Apply Filters</h2>
            <h3>Languages</h3>
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
            {/* <ClearFilter onClick={()=>clearFilter("status")}>clear status filter</ClearFilter>
            <h3>Dates</h3>
            <label htmlFor="startDate">Start Date</label>
            <input
                value={filterInput.startDate}
                type="date"
                name="startDate"
                onChange={handleChange}
            />
            <ClearFilter onClick={()=>clearFilter("dates")}>clear dates filter</ClearFilter> */}
        </SidePanelContainer>
    );
}

export default SideBar;
