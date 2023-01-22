import React, { useEffect } from "react";
import Cell from "./Cell";
import Keyboard from "./Keyboard";
import "../App.css";
export default function Board({ gameArr, error, status,activeRow }) {
  // useEffect(()=>{

  // },[status])
  console.log(status);
  return (
    <>
      {gameArr?.map((x, rowIndex) => {
        return (
          <section className={`row ${error && rowIndex === activeRow ? "shake" : ""}`} key={rowIndex}>



            {x.map((value, columnIndex) => (
              <Cell  index={columnIndex} status={status} key={columnIndex} value={value} />
            ))}

            
          </section>
        );
      })}
    </>
  );
}
