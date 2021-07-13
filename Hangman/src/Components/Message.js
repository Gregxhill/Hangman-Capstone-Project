import React, { useEffect } from "react";

function checkWin(correct, wrong, word) {
  let status = "win";

  // removes win status if the correct words array doesnt include all correct letters
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // returns a lose status if the number of incorrect entries equals 11
  if (wrong.length === 11) status = "lose";

  return status;
}

const Message = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  //checks the outcome of the game and displays a message accordingly
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "You won! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Oops, you lost. 😕";
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="message-container">
      <div className="message">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Message;
