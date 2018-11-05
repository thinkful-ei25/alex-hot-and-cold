import React from 'react';
import './game.css'
import GuessList from './guess-list';

export default function Game(props){
  return(
    <section className='game'>
      <h2 id='feedback'>{props.status || 'Make Your Guess!'}</h2>
      <form>
        <input id='userGuess' placeholder='Enter your Guess'>
        </input>
        <button id='guessButton'>
          Guess
        </button>
      </form>
      <p>Guess #{props.counter || '0'}!</p>
      <ul id='guessList'><GuessList /></ul>
    </section>
  );
}