import React, { useEffect, useState, createContext } from "react";
import wordsList from "./assets/wordlist";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Error from "./components/Error";
import Header from "./components/Header";
import Modal from "./components/Modal";
import InfoModal from "./components/InfoModal";
export const WordleContext = createContext();
function App() {
  const [word, setWord] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [gameArr, setGameArr] = useState(
    [...Array(6)].map(() => [...Array(5)].map(() => ""))
  );
  const [column, setColumn] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({
    foundOnCorrectIndex: [],
    foundOnWrongIndex: [],
    notFound: [],
  });
  const [victory, setVictory] = useState(false);
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [test,setTest] = useState();
  if (process.env.REACT_APP_STATUS === "development") {
    console.log(word);
  }
  useEffect(() => {
    if (activeRow === 6 && victory === false) {
      console.log("I RAN");
      setTimeout(() => {
        setModalMessage("You lost! Better luck next time");
        setShow(true);
        setDisabled(!disabled);
      }, 3000);
    }
  }, [activeRow]);

  useEffect(() => {
    console.log("ran");
    getWord();
  }, [setGameArr]);

  useEffect(() => {
    if (victory) {
      setShow(true);
      setModalMessage("Congratulations you won!");
      setDisabled(!disabled);
    }
  }, [victory]);

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
    let keyUpper = key.toUpperCase();
    if (!disabled) {
      if (
        column < gameArr[activeRow].length &&
        keyUpper.length === 1 &&
        isAlphabetLetter(keyUpper)
      ) {
        console.log("setGameArr is running");
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
        console.log("Backspace running", column);
        setWordInCell("", activeRow, column - 1);
        setColumn((prevCol) => prevCol - 1);
      }
    }
  };
  console.log(disabled);
  const evaluteRow = (row) => {
    let foundOnRightIndexInWord = [];
    let foundOnNotRightIndexInWord = [];
    let notFoundInWord = [];
    console.log("Row ", row);
    if (row.join("") === word) {
      setTimeout(() => {
        setVictory(true);
      }, 3000);
    }
    for (let i = 0; i < row.length; i++) {
      if (row[i] === word[i]) {
        foundOnRightIndexInWord.push(row[i]);
      } else if (word.includes(row[i])) {
        foundOnNotRightIndexInWord.push(row[i]);
      } else {
        notFoundInWord.push(row[i]);
      }
    }
    setTest(row);
    setStatus({
      ...status,
      foundOnCorrectIndex: foundOnRightIndexInWord,
      foundOnWrongIndex: foundOnNotRightIndexInWord,
      notFound: notFoundInWord,
    });
  };
  const checkIfWordIsInList = (selectedRow) => {
    let typedWord = selectedRow.join("");
    console.log(typedWord);
    return wordsList.includes(typedWord);
  };

  const handleReset = () => {
    setGameArr([...Array(6)].map(() => [...Array(5)].map(() => "")));
    setStatus({
      foundOnCorrectIndex: [],
      foundOnWrongIndex: [],
      notFound: [],
    });
    setDisabled(false);
    setActiveRow(0);
  };
  return (
    <WordleContext.Provider
      value={{
        word,
        activeRow,
        status,
        error,
        gameArr,
        setDisabled,
        setShow,
        show,
        showInfoModal,
        setShowInfoModal,
        handleReset,
        test,
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
          <Keyboard
            status={status}
            handleVirtualKeyboardPress={handleKeyPress}
          />
        </div>
      </div>
    </WordleContext.Provider>
  );
}

export default App;
