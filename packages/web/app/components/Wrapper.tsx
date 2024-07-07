import React, { useEffect } from "react";
import { Copy, Check } from "lucide-react";

const Wrapper = ({ children }:any) => {

  const [copySuccess, setCopySuccess] = React.useState('');

  const textToCopy = 'npm install gitemo-cli -g';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess('Copied!');
    }, (err) => {
      setCopySuccess('Failed to copy!');
      console.error('Failed to copy text: ', err);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopySuccess('');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copySuccess]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "2px",
      }}
    >
      {React.cloneElement(children)}
      <button
      onClick={copyToClipboard}
      className="flex justify-center items-center "
        style={{
          height: "55px",
          width: "40px",
          borderRadius: "5px 5px 5px 5px",
          color: "#fff",
          background: "#1D1F21",
        }}
        title="Copy"
      >
        {
          copySuccess!=='' ? <Check /> : 
        <Copy />
        }
      </button>
    </div>
  );
};

export default Wrapper;