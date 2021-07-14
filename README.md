# React Hangman Game

## How to play:

Type in any letter. Any correct letters will be filled in just like a regular hangman game!

You have 11 tries!

If you guess the word correctly you win. If you don't you can play again!

For each game a random word is chosen from a list of words. (Hint they're coding related words!)

## How to install:

Find the link under the green `code` button and type `git clone [link]` in your directory.
Then open a terminal in the project directory and type `npm start`.
Alternatively use [this link]( https://belle-croissant-08487.herokuapp.com/) to play the game.

## How it works:

This game was created with React, Javascript, HTML and CSS. A list of words have been hardcoded into the application. Each time the user enters a character it is compared to the chosen word and is either stored in an "wrongLetters" array or a "correctLetters" array. If the user guesses the word the game ends and can be reset. Once the user enters 11 incorrect letters the game ends.
