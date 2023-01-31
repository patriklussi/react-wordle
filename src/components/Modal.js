import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
export default function VictoryMessage({ word, show , setShow,modalMessage }) {
  if (!show) {
    return;
  }

  return (
    <div className="modal">
      <section className="modal-content">
        <div className="modal-header">
          <IconButton
            style={{ cursor: "pointer", fontSize: "2rem", color: "white" }}
            onClick={() => {
              setShow(false);
            }}
          >
            {" "}
            <CloseIcon />
          </IconButton>
        </div>
        <div className="modal-title">
          <h2>{modalMessage}</h2>
        </div>
        <div className="modal-body">
          <h3>The word was {word}!</h3>
          <button  className="replay-button">
            Play again
          </button>
        </div>
      </section>
    </div>
  );
}
