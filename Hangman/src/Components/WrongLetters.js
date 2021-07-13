import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    // prints out the wrong letters the user entered
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 ? <p>Wrong</p> : null}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
