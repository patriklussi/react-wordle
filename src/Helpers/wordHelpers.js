import wordsList from "../assets/wordlist";

export const isAlphabetLetter = (char) => /[A-Z]/.test(char);
 
export const checkIfWordIsInList = (selectedRow) => {
  let typedWord = selectedRow.join("");
  return wordsList.includes(typedWord);
};

export  const getWord = () =>  wordsList[Math.floor(Math.random() * wordsList.length)];