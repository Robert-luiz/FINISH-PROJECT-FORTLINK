"use client";
import React from "react";

const FortlinkAnimate: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const typingSpeed = 220;
    const endDelay = 1800; // pausa quando termina

    let timeout: NodeJS.Timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, endDelay);
    }

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <h2 className="text-lg md:text-3xl font-bold text-nexus-primary mb-1 tracking-widest">
      {displayedText}
      <span className="animate-pulse ml-1">●</span>
    </h2>
  );
};

export default FortlinkAnimate;