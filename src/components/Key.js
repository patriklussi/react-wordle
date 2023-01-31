import React, { useState, useEffect } from "react";
import "../App.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { IconButton } from "@mui/material";
export default function Key({ value, handleClick, status }) {
  const [foundClass, setfoundClass] = useState(false);
  const [containsClass, setContainsClass] = useState(false);
  const [notFoundClass, setNotFoundClass] = useState(false);
  useEffect(() => {
    colorKeys(value);
  }, [status]);

  const colorKeys = (value) => {
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
      className={`keyboard-button ${
        foundClass ? "toggle-foundletter-color-green" : ""
      }  ${containsClass ? "toggle-containsletter-color-yellow" : ""} ${
        notFoundClass ? "toggle-not-found-color" : ""
      } `}
      onClick={() => {
        handleClick(value);
      }}
    >
      {/* {value === "Backspace" ? <IconButton><BackspaceIcon fontSize="small"/></IconButton> : value} */}
      {value}
    </button>
  );
}
