import React from 'react';

export default function EntryForm(props){
  return(      
  <form id='entry-form'>
    <input id='userGuess' placeholder='Enter your Guess' type='number'>
    </input>
    <button id='guessButton' type='submit'>
      Guess
    </button>
  </form>
  );
}