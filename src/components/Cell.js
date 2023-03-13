import React, { useEffect, useState, useContext } from "react";
import "../App.css";
//Hooks
import { useWorldeContext } from "../hooks/useWorldeContext";

export default function Cell({ value, index }) {
  const { word, inputWord, reset } = useWorldeContext();
  const [letterState, setLetterState] = useState("");
  const [flip, setFlip] = useState(false);
  useEffect(() => {
  
    if (reset) {
      setLetterState("");
      setFlip(false);
    }
  }, [reset]);
  useEffect(() => {
    if (value === "") {
      return;
    }
    setTimeout(() => {
      colorCells();
      setFlip(true);
    }, 350 * index);
  }, [inputWord]);

  const colorCells = () => {
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
