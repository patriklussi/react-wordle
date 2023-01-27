import React, { useEffect, useState } from "react";
import "../App.css";

export default function Cell({ value, status, index }) {
  const [foundClass, setfoundClass] = useState(false);
  const [containsClass, setContainsClass] = useState(false);
  const [notFoundClass, setNotFoundClass] = useState(false);
  const [flip, setFlip] = useState("");
  useEffect(() => {
    if (value === "") {
      return;
    }
    function color() {
      if (status.foundOnCorrectIndex?.includes(value)) {
        setfoundClass(true);
        console.log("HELLO");
      } else if (status.foundOnWrongIndex?.includes(value)) {
        setContainsClass(true);
        console.log("HELLO");
      } else if (status.notFound?.includes(value)) {
        setNotFoundClass(true);
      }
    }

    setTimeout(() => {
      color();
      setFlip("flip-cell");
    }, 350 * index);
  }, [status]);
  // Check for colors should be done with a useffect otherwise shit just dont work
  return (
    <article
      className={`cell ${value !== "" ? "bounce-oninput" : ""} ${
        foundClass ? "toggle-foundletter-color-green" : ""
      }  ${containsClass ? "toggle-containsletter-color-yellow" : ""} ${
        notFoundClass ? "toggle-not-found-color" : ""
      } ${flip} `}
    >
      {value}
    </article>
  );
}
