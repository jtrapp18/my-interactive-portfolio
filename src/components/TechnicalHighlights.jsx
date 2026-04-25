import React from 'react';
import data from "../data";
import Languages from '../components/Languages';
import { Link } from "react-router-dom";
import AboutTitle from './AboutTitle';
import { StyledAboutArticle } from '../MiscStyling';

const TechnicalHighlights = ({ isActive }) => {
    return (
        <StyledAboutArticle
            className={isActive ? 'active' : ''}
        >
            <section>
                <AboutTitle
                    title="technical"
                />
                <Languages languages={data.languages} />
                <div className="about-info">
                    <p>
                        <strong>AI & Agentic Systems</strong>: LangGraph, LangChain, LangSmith, Pydantic, vision LLMs, tool calling, human-in-the-loop workflows, prompt engineering, YAML config architecture
                        <br/><br/>
                        <strong>Python Highlights</strong>: scikit-learn, pandas, NumPy, matplotlib, boto3, Streamlit, Flask, SQLAlchemy
                        <br/><br/>
                        <strong>JavaScript / TypeScript Highlights</strong>: React, Context API, React Router, async/await, DOM manipulation, custom hooks
                        <br/><br/>
                        <strong>Infrastructure & Data</strong>: AWS (S3, QuickSight), Docker, Railway, PostgreSQL, CI/CD, response caching, database indexing
                        <br/><br/>
                        <i>
                            For examples of how I applied these tools, visit the{" "}
                            <Link to="/projects"><strong>Projects</strong></Link> or{" "}
                            <Link to="/relevant-work"><strong>Relevant Work</strong></Link> page.
                        </i>
                    </p>
                </div>
            </section>
        </StyledAboutArticle>
    );
};

export default TechnicalHighlights;