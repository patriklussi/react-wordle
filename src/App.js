import React, { useEffect, useState, useMemo, useReducer } from "react";
import wordsList from "./assets/wordlist";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Error from "./components/Error";
import Header from "./components/Header";
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
  const [status, setStatus] = useState([]);
  

  useEffect(() => {
    let index = Math.floor(Math.random() * wordsList.length);
    setWord(wordsList[index]);
  }, []);
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
  };
  let arr = [];
  const evaluteRow = (row) => {
    console.log("Row ", row);
    if (row.join("") === word) {
      setStatus(row)
    } else {
      for (let i = 0; i < row.length; i++) {
        if (row[i] === word[i]) {
          // arr.push(row[i]);
          // console.log("ARR",arr);
        } else if(word.includes(row[i])){
          arr.push(row[i]);
          console.log("ARR",arr);
          setStatus(arr);
        }
      }
    }
    // for (let i = 0; i < row.length; i++) {
    //   if (row[i] === word[i]
    //     ) {
    //     console.log("letter matches to a letter in word", word[i]);
    //     setStatus([...status,
    //     row[i]]);
    //   } else if (word.includes(row[i])) {
    //     console.log("in word but doesnt match", row[i]);
    //   } else {
    //     console.log("not in word", row[i]);
    //   }
    // }
  };
  const checkIfWordIsInList = (selectedRow) => {
    let typedWord = selectedRow.join("");
    console.log(typedWord);
    return wordsList.includes(typedWord);
  };
  console.log(status);
  // const checkIfExists = (rowToCheck) => {
  //   let inputWord = rowToCheck.join("");
  //   console.log(wordsList);
  //   if (wordsList.includes(inputWord)) {
  //     for (let i = 0; i < rowToCheck.length; i++) {
  //       if (rowToCheck[i] === word[i]) {
  //         console.log("matches");
  //       } else if (word.includes(rowToCheck[i])) {
  //         console.log("Almost exists");
  //       } else {
  //         console.log("letter is not in word at all");
  //       }
  //     }
  //   } else {
  //     setError("Word is not in the list");
  //     setTimeout(() => {
  //       setError("");
  //     }, 2000);
  //   }
  // };

  // const arr = [
  //   ["W", "Q", "R", "D", "R"],
  //   ["W", "Q", "D", "D", "S"],
  // ];
  // const wordList = ["words", "piggy", "snacks"];
  // const wordOfTheDay = wordList[Math.random() * 3];
  // console.log(wordOfTheDay);
  // function runTrough() {
  //   console.log(word);
  //   let row = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr[row].length; j++) {
  //       if (arr[row][j] === wordOfTheDay[j]) {
  //         console.log("victory");
  //       } else if (wordOfTheDay.includes(arr[row][j])) {
  //         console.log("Word is in the thing");
  //       } else {
  //         console.log("word is not in it at all");
  //       }
  //     }
  //   }
  // }

  // runTrough();
 
  return (
    <div className="wrapper">

    {/* <Header/> */}
    <div
      onKeyDown={(e) => {
        handleKeyPress(e.key);
      }}
      tabIndex={0}
      className="Game"
    >
     
      {error ? <Error errorMsg={error} /> : <></>}
      <div className="game-wrapper">
        <Board activeRow={activeRow} status={status} error={error} gameArr={gameArr} />
      </div>
      <Keyboard status={status} handleVirtualKeyboardPress={handleKeyPress} />
    </div>
    </div>
  );
}

export default App;
