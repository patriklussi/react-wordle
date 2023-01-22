import React, { useState, useEffect } from "react";
import "../App.css";
export default function Keyboard({ handleVirtualKeyboardPress }) {
  let backspace = "BACKSPACE";
  let enter = "ENTER";
  let keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  keys.unshift(enter);
  keys.unshift(backspace);
  useEffect(() => {}, []);
  // const colorTheButton = (value) => {
  //   if (arr.includes(value)) {
  //     return "greenbackground";
  //   } else if (arrYellow.includes(value)) {
  //     return "yellowbackground";
  //   } else if (shitRay.includes(value)) {
  //     return "darkgray";
  //   }
  // };
  const handleClick = (value) => {
    handleVirtualKeyboardPress(value);
  };
  return (
    <div className="keyboard-wrapper">
      {keys.map((value, index) => {
    
        return (
          <button
            key={index}
            className={`keyboard-button`}
            onClick={() => {
              handleClick(value);
            }}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
