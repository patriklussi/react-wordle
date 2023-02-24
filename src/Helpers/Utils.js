import wordsList from "../assets/wordlist";

export const isAlphabetLetter = (char) => {
  return /[A-Z]/.test(char);
};

export const checkIfWordIsInList = (selectedRow) => {
  let typedWord = selectedRow.join("");
  return wordsList.includes(typedWord);
};
