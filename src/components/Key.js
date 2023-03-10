//React imports
import React, { useState, useEffect } from "react";

//Library imports
import BackspaceIcon from "@mui/icons-material/Backspace";

//Hooks
import { useWorldeContext } from "../hooks/useWorldeContext";

export default function Key({ value, handleClick }) {
  const {  inputWord,word ,reset} = useWorldeContext();
  const [keyState, setKeyState] = useState("");
  useEffect(() => {
    if(!inputWord?.includes(value)){
      return;
    }
    colorKeys(value);
  });
  
  useEffect(()=>{
    if(reset){
      setKeyState("");
    }
  },[reset])
  const colorKeys = (value) => {
    let indexOfValueInInputWord = inputWord?.indexOf(value);
    if (indexOfValueInInputWord !== -1) {
   
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
      className={`${value === "Backspace" ? "wide-keyboard-button" : value === "Enter" ? "wide-keyboard-button" : "keyboard-button"} ${keyState}  `}
      onClick={() => {
        handleClick(value);
      }}
    >
      {value === "Backspace" ? (
        <BackspaceIcon  fontSize="small" className="backspace" />
      ) : (
        value
      )}
    </button>
  );
}
