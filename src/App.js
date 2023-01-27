import React, { useEffect, useState, useMemo, useReducer } from "react";
import wordsList from "./assets/wordlist";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Error from "./components/Error";
import Header from "./components/Header";
import Modal from "./components/Modal";
function App() {
  const [word, setWord] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [gameArr, setGameArr] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [column, setColumn] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({
    foundOnCorrectIndex: [],
    foundOnWrongIndex: [],
    notFound: [],
  });
  const [victory, setVictory] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (activeRow === 6 && victory === false) {
      console.log("loss");
    }
  }, [activeRow]);
  useEffect(() => {
    let index = Math.floor(Math.random() * wordsList.length);
    setWord(wordsList[index]);
  }, []);
  useEffect(() => {
    if (victory) {
      setShow(true);
    }
  }, [victory]);
  console.log(word);
  const isAlpha = (char) => {
    return /[A-Z]/.test(char);
  };

  const setGameChar = (char, row, col) => {
    setGameArr((prevState) => {
      let newState = [...prevState];
      console.log(newState);
      newState[row][col] = char;
      return newState;
    });
  };

  const handleKeyPress = (key) => {
    let keyUpper = key.toUpperCase();
    if (!victory) {
      if (
        column < gameArr[activeRow].length &&
        keyUpper.length === 1 &&
        isAlpha(keyUpper)
      ) {
        console.log("setGameArr is running");
        setGameChar(keyUpper, activeRow, column);
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
        console.log("Backspace running", column);
        setGameChar("", activeRow, column - 1);
        setColumn((prevCol) => prevCol - 1);
      }
    }
  };

  const evaluteRow = (row) => {
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    console.log("Row ", row);
    if (row.join("") === word) {
      console.log("won");
      setTimeout(() => {
        setVictory(true);
      }, 3000);
    }
    for (let i = 0; i < row.length; i++) {
      if (row[i] === word[i]) {
        arr.push(row[i]);
      } else if (word.includes(row[i])) {
        arr2.push(row[i]);
      } else {
        arr3.push(row[i]);
      }
    }

    setStatus({
      ...status,
      foundOnCorrectIndex: arr,
      foundOnWrongIndex: arr2,
      notFound: arr3,
    });
  };
  const checkIfWordIsInList = (selectedRow) => {
    let typedWord = selectedRow.join("");
    console.log(typedWord);
    return wordsList.includes(typedWord);
  };
  console.log(status);

  return (
    <div
      onKeyDownCapture={(e) => {
        handleKeyPress(e.key);
      }}
      tabIndex={0}
      className="wrapper"
    >
      <Header />
      <Modal word={word} show={show} setShow={setShow} />
      <div className="Game">
        {error ? <Error errorMsg={error} /> : <></>}
        <div className="game-wrapper">
          <Board
            activeRow={activeRow}
            status={status}
            error={error}
            gameArr={gameArr}
          />
        </div>
        <Keyboard status={status} handleVirtualKeyboardPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
