'use client';
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Wrapper from "./Wrapper";

const Install = () => {
  const codeString = `npm i gitemo-cli -g`;

  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

export default Install;