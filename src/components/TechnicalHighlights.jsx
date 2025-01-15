import React from 'react';
import data from "../data";
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
                    <strong>JavaScript Highlights</strong>: API requests with fetch, asynchronous programming (Promises, async/await), event handling and DOM manipulation
                    <br/><br/>
                    <strong>React Highlights</strong>: React Router, Context API, Material UI, styled components, and custom hooks
                    <br/><br/>
                    <strong>VBA Highlights</strong>: user forms, DAO connections, Add-ins using UDFs, connection across various Microsoft tools (Excel, Access, Word, Outlook)
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