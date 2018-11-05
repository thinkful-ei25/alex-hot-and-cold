import React from 'react';

import GuessList from './guess-list';

export default function Game(props){
  return(
    <section>
      <h2>{props.status || 'Make Your Guess!'}</h2>
      <form>
        <input placeholder='Enter your Guess'>
        </input>
        <button>
          Guess
        </button>
      </form>
      <p>Guess {props.counter || '0'}!</p>
      <ul><GuessList /></ul>
    </section>
  );
}