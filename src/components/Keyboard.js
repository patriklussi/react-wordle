import React, { } from "react";
import "../App.css";
import Key from "../components/Key";
import { keyRow1,keyRow2,keyRow3 } from "../Utils/keyboardUtils";
export default function Keyboard({ handleVirtualKeyboardPress  }) {
 
  const handleClick = (value) => {
    handleVirtualKeyboardPress(value);
  };
  return (
    <div className="keyboard-wrapper">
      
      <div className="key-row">
        {keyRow1?.map((value,index) => {
          return (
            <Key key={index} value={value} handleClick={handleClick} />
          );
        })}
      </div>
      <div className="key-row">
        {keyRow2?.map((value,index) => {
          return (
            <Key key={index}  value={value} handleClick={handleClick} />
          );
        })}
      </div>
      <div className="key-row">
      {keyRow3?.map((value,index) => {
        return <Key key={index}  value={value} handleClick={handleClick} />;
      })}
      </div>
    </div>
  );
}
