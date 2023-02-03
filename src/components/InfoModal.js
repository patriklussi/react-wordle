import React, { useContext } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { WordleContext } from "../App";
export default function InfoModal() {
  const {  showInfoModal, setShowInfoModal,setDisabled,handleReset  } = useContext(WordleContext);
  if (!showInfoModal) {
    return;
  }
  const closeAndResetBoard = () => {
    handleReset();
    setShowInfoModal(false);
  }
  return (
    <div className="modal" >
      <section className="modal-content">
        <div className="modal-header">
          <IconButton
            style={{ cursor: "pointer", fontSize: "2rem", color: "white" }}
            onClick={() => {
              setShowInfoModal(false);
              setDisabled(false);
            }}
          >
            {" "}
            <CloseIcon />
          </IconButton>
        </div>
        <div className="modal-title">
          <h1>How to play</h1>
        </div>
        <h3>Guess the word in 6 tries</h3>
        <section className="modal-body">
          <ul className="info-modal-ul">
            <li>Each letter must be a valid 5 letter word</li>
            <li>
              The color of the tiles will change based the correctness of a
              guess
            </li>
          </ul>
        </section>
        <section className="modal-example">
          <h4>Examples</h4>
          <div className="example-container">
            <div style={{ background: "#59d155" }} className="example-cell">
              W
            </div>
            <div className="example-cell">O</div>
            <div className="example-cell">R</div>
            <div className="example-cell">D</div>
            <div className="example-cell">S</div>
          </div>
          <p>W is in the word and the correct spot</p>
          <div className="example-container">
            <div className="example-cell">R</div>
            <div className="example-cell">I</div>
            <div className="example-cell">G</div>
            <div className="example-cell">H</div>
            <div style={{ background: "#d1d141" }} className="example-cell">
              T
            </div>
          </div>
          <p>T is in the word but in the wrong spot</p>
          <div className="example-container">
            <div
              style={{ background: "rgb(156, 156, 156)" }}
              className="example-cell"
            >
              S
            </div>
            <div className="example-cell">P</div>
            <div className="example-cell">E</div>
            <div className="example-cell">A</div>
            <div className="example-cell">K</div>
          </div>
          <p>S is not in the word at all</p>
        </section>
        <footer className="modal-footer">
          <p>
            I hope this helped clear things up<br></br> Now go and have fun with
            the game!
          </p>
          <button onClick={closeAndResetBoard} className="replay-button">Play!</button>
        </footer>
      </section>
    </div>
  );
}
