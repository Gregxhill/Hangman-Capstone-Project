import React from "react";
import state1 from "./Assets/state1.GIF";
import state2 from "./Assets/state2.GIF";
import state3 from "./Assets/state3.GIF";
import state4 from "./Assets/state4.GIF";
import state5 from "./Assets/state5.GIF";
import state6 from "./Assets/state6.GIF";
import state7 from "./Assets/state7.GIF";
import state8 from "./Assets/state8.GIF";
import state9 from "./Assets/state9.GIF";
import state10 from "./Assets/state10.GIF";
import state11 from "./Assets/state11.GIF";

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  const returnImage = (errors) => {
    switch (errors) {
      case 0:
        return state1;
      case 1:
        return state2;
      case 2:
        return state3;
      case 3:
        return state4;
      case 4:
        return state5;
      case 5:
        return state6;
      case 6:
        return state7;
      case 7:
        return state8;
      case 8:
        return state9;
      case 9:
        return state10;
      case 10:
        return state11;
      default:
        return null;
    }
  };
  return (
    <>
      {/* depending on the number of incorrect entries a specific image wil be returned */}
      <img src={returnImage(errors)} alt="" />
    </>
  );
};

export default Figure;
