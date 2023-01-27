import React, { useState, useEffect } from "react";
import "../App.css";
import Key from "../components/Key";
export default function Keyboard({ handleVirtualKeyboardPress, status }) {
  const allkeys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const enter = "Enter";
  const backspace = "Backspace";
  const keyRow1 = allkeys.slice(0,10);
  const keyRow2 = allkeys.slice(10,19);
  const keyRow3 = allkeys.slice(19,29);
  keyRow3.push(backspace);
  keyRow3.unshift(enter);

  const handleClick = (value) => {
    handleVirtualKeyboardPress(value);
  };
  return (
    <div className="keyboard-wrapper">
      <div>
        {keyRow1?.map((value,index) => {
          return (
            <Key key={index} status={status} value={value} handleClick={handleClick} />
          );
        })}
      </div>
      <div>
        {keyRow2?.map((value,index) => {
          return (
            <Key key={index} status={status} value={value} handleClick={handleClick} />
          );
        })}
      </div>
      <div>
      {keyRow3?.map((value,index) => {
        return <Key key={index} status={status} value={value} handleClick={handleClick} />;
      })}
      </div>
    </div>
  );
}
