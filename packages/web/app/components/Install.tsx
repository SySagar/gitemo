'use client';
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Wrapper from "./Wrapper";

const Install = () => {
  const codeString = `npm install gitemo-cli -g`;

  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" customStyle={
        {
          fontSize: "1rem",
          borderRadius: "5px",
          padding: "10px",
          paddingInline: "20px",
          color: "#08090A",
          boxShadow: "0px 0px 4px 0px rgba(216,216,216,0.75)",
        }
      }>
        {codeString}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

export default Install;