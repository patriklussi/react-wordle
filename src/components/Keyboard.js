//React imports
import React from "react";

//Components
import Key from "../components/Key";

//Util imports
import { keyRow1,keyRow2,keyRow3 } from "../Helpers/keyboardUtils";

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
