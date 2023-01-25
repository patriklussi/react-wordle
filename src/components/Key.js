import React, { useState, useEffect } from "react";

export default function Key({ value, handleClick, status }) {
  const [foundClass, setfoundClass] = useState("");
  const [containsClass, setContainsClass] = useState("");
  const [notFoundClass, setNotFoundClass] = useState("");
  useEffect(() => {
    colorKeys(value);
  },[status]);

  const colorKeys = (value) => {
    if (status.foundOnCorrectIndex?.includes(value)) {
      setfoundClass("greenbackground");
    } else if (status.foundOnWrongIndex?.includes(value)) {
      setContainsClass("yellowbackground");
    } else if (status.notFound?.includes(value)) {
      setNotFoundClass("blackness");
    }
  };
  return (
    <button
      className={`keyboard-button ${foundClass}  ${containsClass} ${notFoundClass} `}
      onClick={() => {
        handleClick(value);
      }}
    >
      {value}
    </button>
  );
}
