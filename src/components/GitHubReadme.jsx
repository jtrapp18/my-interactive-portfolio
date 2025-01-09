import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import BookIcon from "./BookIcon"

const StyledDiv = styled.div`
  border: 1px solid var(--gray);
  padding: 10px;
  border-radius: 15px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const GitHubReadme = ({readMeLink}) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          readMeLink
        );
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <StyledDiv>
      <strong><BookIcon /> README</strong>
      <hr />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </StyledDiv>
  );
};

export default GitHubReadme;
