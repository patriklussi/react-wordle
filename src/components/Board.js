import React, {  useContext } from "react";

//Components
import Cell from "./Cell";
//Context
import { WordleContext } from "../components/Game";

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
