import React, { useContext } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { WordleContext } from "../App";
export default function Modal({ modalMessage }) {
  const { show, setShow, word, handleReset } = useContext(WordleContext);
  if (!show) {
    return;
  }
  const playAgain = () => {
    handleReset();
    setShow(false);
  };
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
        </div>
        <footer className="modal-footer">
          {" "}
          <button className="replay-button" onClick={playAgain}>
            Play again
          </button>
        </footer>
      </section>
    </div>
  );
}
