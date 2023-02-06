import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { WordleContext } from "../components/Game";
export default function Key({ value, handleClick }) {
  const {  inputWord,word ,reset} = useContext(WordleContext);
  const [keyState, setKeyState] = useState("");
  useEffect(() => {
    if(!inputWord?.includes(value)){
      return;
    }
    colorKeys(value);
  }, [inputWord]);
  useEffect(()=>{
    console.log("reset",reset); 
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
