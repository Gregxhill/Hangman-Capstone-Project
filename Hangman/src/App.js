// Inspiration for the game: https://www.youtube.com/watch?v=jj0W8tYX_q8&t=634s

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Figure from "./Components/Figure";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Message from "./Components/Message";

//array of available words to be guessed
const words = ["react", "hyperion", "bootcamp", "javascript"];
//a random number is generated to access a word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //set the states
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  //the following code will execute whenever the states changes
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        //checks if the selected word includes the letter the user entered
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            //takes current state and returns an updated value
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            alert("You've entered this already!");
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            alert("You've entered this already!");
          }
        }
      }
    };

    //an event listener is added to listen for user entries
    window.addEventListener("keydown", handleKeydown);

    //event listener is removed when component is unmounted
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //this function resets the chosen word and clears the states
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    //randomly selects a word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  function help() {
    alert(`Try guess the word! Enter any letter (a-z). You have 11 tries!`);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Message
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <button onClick={() => help()}>Help</button>
    </>
  );
}

export default App;
