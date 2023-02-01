import React, { useEffect, useContext } from "react";
import Cell from "./Cell";
import Keyboard from "./Keyboard";
import "../App.css";
import { WordleContext } from "../App";

export default function Board() {
  const { activeRow, error, gameArr } = useContext(WordleContext);

  return (
    <>
      {gameArr?.map((x, rowIndex) => {
        return (
          <section
            className={`row ${
              error && rowIndex === activeRow ? "shake-on-error" : ""
            }`}
            key={rowIndex}
          >
            {x.map((value, columnIndex) => (
              <Cell
                index={columnIndex}
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
