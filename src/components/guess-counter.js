import React from 'react';

export default function GuessCounter(props) {
  console.log(props);
  return(
    <p>Guess #{props.numberofGuesses || '0'}!</p>
  );
}