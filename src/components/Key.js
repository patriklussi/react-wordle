import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { WordleContext } from "../App";
export default function Key({ value, handleClick }) {
  const { status, test,word } = useContext(WordleContext);
  const [keyState, setKeyState] = useState("");
  useEffect(() => {
    if(!test?.includes(value)){
      return;
    }
    colorKeys(value);
  }, [status]);

  const colorKeys = (value) => {
    let indexOfValueInInputWord = test?.indexOf(value);
    
       
    if (indexOfValueInInputWord !== -1) {
      console.log(value);
      const correct = word[indexOfValueInInputWord] === value;
      const almost = !correct && word.includes(value);
      if (correct) {
        setKeyState("toggle-foundletter-color-green");
      } else if (almost) {
        setKeyState("toggle-containsletter-color-yellow");
      } else {
        setKeyState("toggle-not-found-color");
      }
    } 
  };
  return (
    <button
      className={`keyboard-button ${keyState} `}
      onClick={() => {
        handleClick(value);
      }}
    >
      {value === "Backspace" ? (
        <BackspaceIcon fontSize="small" className="backspace" />
      ) : (
        value
      )}
    </button>
  );
}
