import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import data from "../data";
import ScrollButtons from '../components/ScrollButtons';
import Languages from '../components/Languages';
import { Link } from "react-router-dom";

const TechnicalHighlights = () => {
    return (
        <section>
            <h2>technical<strong>.</strong></h2>
            <Languages languages={data.languages} />
            <div className="about-info">
                <p>
                    <strong>Python Highlights</strong>: scikit-learn, pandas, NumPy, matplotlib, boto3, streamlit, Flask, SQLAlchemy
                    <br/><br/>
                    <strong>JavaScript Highlights</strong>: API requests with fetch, custom hooks, asynchronous programming (Promises, async/await), event handling and DOM manipulation
                    <br/><br/>
                    <strong>React Highlights</strong>: React Router, Context API, Material UI, JSX, components, and hooks
                    <br/><br/>
                    <strong>VBA Highlights</strong>: forms, connection across various Microsoft tools (Excel, Access, Word, Outlook)
                    <br/><br/>
                    <i>
                        For examples of how I applied these tools, visit the{" "}
                        <Link to="/projects"><strong>Projects</strong></Link> or{" "}
                        <Link to="/relevant-work"><strong>Relevant Work</strong></Link> page.
                    </i>
                </p>
            </div>
        </section>
    );
};

export default TechnicalHighlights;