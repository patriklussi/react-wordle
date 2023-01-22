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
      {gameArr?.map((x, index) => {
        return (
          <section className={`row ${error && index === activeRow ? "shake" : ""}`} key={index}>
            {x.map((value, index) => (
              <Cell className="greenbackground" status={status} key={index} value={value} />
            ))}
          </section>
        );
      })}
    </>
  );
}
