import React, { useEffect, useState,useContext } from "react";
import "../App.css";
import { WordleContext } from "../App";

export default function Cell({ value,  index}) {
  const {word,status,setDisabled} = useContext(WordleContext);
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
    const correct = word[index] === value;
    const almost = !correct && word.includes(value);
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

