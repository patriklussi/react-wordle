import React, { useEffect, useState } from "react";
import "../App.css";

export default function Cell({ value, status, index, correctWord,setDisabled }) {
  const [letterState, setLetterState] = useState("");
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    if (value === "") {
      return;
    }
    setTimeout(() => {
      color();
      setFlip(true);
     
    }, 350 * index);
  
  }, [status]);

  const color = () => {
    const correct = correctWord[index] === value;
    const almost = !correct && correctWord.includes(value);
    if (correct) {
      setLetterState("toggle-foundletter-color-green");
    } else if (almost) {
      setLetterState("toggle-containsletter-color-yellow");
    } else {
      setLetterState("toggle-not-found-color");
    }
  };
  return (
    <article
     
      className={`cell ${value !== "" ? "bounce-oninput" : ""} 
        ${letterState}
        ${flip ? "flip-cell" : ""} `}
    >
      {value}
    </article>
  );
}

