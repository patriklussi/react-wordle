import React, { useEffect } from "react";
import Cell from "./Cell";
import Keyboard from "./Keyboard";
import "../App.css";
import { Co2Sharp } from "@mui/icons-material";
export default function Board({ gameArr, error, status, activeRow ,correctWord,setDisabled}) {
  // useEffect(()=>{

  // },[status])
  console.log(status);
  return (
    <>
      {gameArr?.map((x, rowIndex) => {
      
        return (
          <section
            className={`row ${error && rowIndex === activeRow ? "shake-on-error" : ""}`}
            key={rowIndex}
          >
            {x.map((value, columnIndex) => (
              <Cell
               correctWord={correctWord}
               setDisabled={setDisabled}
                index={columnIndex}
                status={status}
                key={columnIndex}
                value={value}
              />
            ))}
          </section>
        );
      })}
    </>
  );
}
