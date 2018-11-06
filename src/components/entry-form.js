import React from 'react';

import './entry-form.css'

export default function EntryForm(props){
  return(      
  <form id='entry-form'>
    <input id='userGuess' className='userGuess' placeholder='Enter your Guess' type='number'>
    </input>
    <button id='guessButton' className='button' type='submit'>
      Guess
    </button>
  </form>
  );
}