import React from 'react';
import './game.css'
import EntryForm from './entry-form';
import GuessList from './guess-list';
import GuessCounter from './guess-counter';
import Header from './header';

export default function Game(props){
  return(
    <div>
      <Header />
      <section className='game'>
        <h2 id='feedback'>{props.status || 'Make Your Guess!'}</h2>
        <EntryForm />
        <GuessCounter />
        <GuessList />
      </section>
    </div>
  );
}