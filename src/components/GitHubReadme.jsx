import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default GitHubReadme;
