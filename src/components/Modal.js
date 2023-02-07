import React, { useContext } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { WordleContext } from "../components/Game";
export default function Modal({ modalMessage }) {
  const { show, setShow, word, handleReset, activeRow, gameWon } =
    useContext(WordleContext);
  if (!show) {
    return;
  }
  const playAgain = () => {
    handleReset();
    setShow(false);
  };
  return (
    <div className="modal">
      <section className="modal-content-victory">
        <div className="modal-body">
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
            <h1>{modalMessage}</h1>
          </div>
          <h3>The word was {word}!</h3>
          {gameWon ? (
            <h3>You found the word in {activeRow} attempts</h3>
          ) : (
            <h3>You failed to find the word in {activeRow} attempts</h3>
          )}
        </div>
        <footer className="modal-footer-victory">
          {" "}
          <button className="replay-button" onClick={playAgain}>
            Play again
          </button>
        </footer>
      </section>
    </div>
  );
}
