import React, { useState, useEffect } from "react";
import "../App.css";
export default function Key({ value, handleClick, status }) {
  const [foundClass, setfoundClass] = useState(false);
  const [containsClass, setContainsClass] = useState(false);
  const [notFoundClass, setNotFoundClass] = useState(false);
  useEffect(() => {
    colorKeys(value);
  }, [status]);

  const colorKeys = (value) => {
    setContainsClass(false);
    setfoundClass(false);
    if (status.foundOnCorrectIndex?.includes(value)) {
      setfoundClass(true);
    } else if (status.foundOnWrongIndex?.includes(value)) {
      setContainsClass(true);
    } else if (status.notFound?.includes(value)) {
      setNotFoundClass(true);
    }
  };
  return (
    <button
      className={`keyboard-button ${foundClass ? "greenbackground" : ""}  ${
        containsClass ? "yellowbackground" : ""
      } ${notFoundClass ? "toggle-not-found-color" : ""} `}
      onClick={() => {
        handleClick(value);
      }}
    >
      {value}
    </button>
  );
}
