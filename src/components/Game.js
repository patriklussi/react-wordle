import React, { useEffect, useState, createContext } from "react";
import wordsList from "../assets/wordlist";
import "../App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Error from "./Error";
import Header from "./Header";
import Modal from "./Modal";
import InfoModal from "./InfoModal";
export const WordleContext = createContext();
function Game() {
  const [word, setWord] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [gameArr, setGameArr] = useState(
    [...Array(6)].map(() => [...Array(5)].map(() => ""))
  );
  const [column, setColumn] = useState(0);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [inputWord, setInputWord] = useState();
  const [reset, setReset] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  if (process.env.REACT_APP_STATUS === "development") {
    console.log(word);
  }

  useEffect(() => {
    if (activeRow === 6 && gameWon === false) {
      setTimeout(() => {
        setModalMessage("You lost! Better luck next time");
        setShow(true);
        setDisabled(!disabled);
      }, 3000);
    }
  }, [activeRow]);

  useEffect(() => {
    getWord();
  }, [setGameArr]);

  useEffect(() => {
    if (gameWon) {
      setShow(true);
      setModalMessage("Congratulations you won!");
    }
  }, [gameWon]);

  const isAlphabetLetter = (char) => {
    return /[A-Z]/.test(char);
  };
  const getWord = () => {
    let index = Math.floor(Math.random() * wordsList.length);
    setWord(wordsList[index]);
  };

  const setWordInCell = (char, row, col) => {
    setGameArr((prevState) => {
      let newState = [...prevState];
      newState[row][col] = char;
      return newState;
    });
  };

  const handleKeyPress = (key) => {
    setReset(false);
    let keyUpper = key.toUpperCase();
    if (!disabled) {
      if (
        column < gameArr[activeRow].length &&
        keyUpper.length === 1 &&
        isAlphabetLetter(keyUpper)
      ) {
        setWordInCell(keyUpper, activeRow, column);
        setColumn((prevCol) => prevCol + 1);
      } else if (column >= gameArr[activeRow].length && keyUpper === "ENTER") {
        if (checkIfWordIsInList(gameArr[activeRow])) {
          setError(null);
          evaluteRow(gameArr[activeRow]);
          setActiveRow((prevRow) => prevRow + 1);
          setColumn(0);
        } else {
          setError("Word is not in list");
          setTimeout(() => {
            setError(null);
          }, 2000);
        }
      } else if (keyUpper === "BACKSPACE" && column > 0) {
        setWordInCell("", activeRow, column - 1);
        setColumn((prevCol) => prevCol - 1);
      }
    }
  };

  const evaluteRow = (row) => {
    if (row.join("") === word) {
      setTimeout(() => {
        setGameWon(true);
        setDisabled(!disabled);
      }, 3000);
    }
    setInputWord(row);
  };
  const checkIfWordIsInList = (selectedRow) => {
    let typedWord = selectedRow.join("");
    return wordsList.includes(typedWord);
  };

  const handleReset = () => {
    setGameArr([...Array(6)].map(() => [...Array(5)].map(() => "")));
    setDisabled(false);
    setActiveRow(0);
    setGameWon(false);
    setReset(!reset);
    getWord();
  };
  console.log("reset", reset);
  return (
    <WordleContext.Provider
      value={{
        word,
        activeRow,
        error,
        gameArr,
        setDisabled,
        setShow,
        show,
        showInfoModal,
        setShowInfoModal,
        handleReset,
        inputWord,
        reset,
        gameWon
      }}
    >
      <div
        onKeyDownCapture={(e) => {
          handleKeyPress(e.key);
        }}
        tabIndex={0}
        className="wrapper"
      >
        <Header />
        <InfoModal />
        <Modal modalMessage={modalMessage} />
        <div className="Game">
          {error ? <Error /> : <></>}
          <div className="game-wrapper">
            <Board setDisabled={setDisabled} />
          </div>
          <Keyboard handleVirtualKeyboardPress={handleKeyPress} />
        </div>
      </div>
    </WordleContext.Provider>
  );
}

export default Game;
