import React from 'react';
import './game.css'
import EntryForm from './entry-form';
import Feedback from './feedback';
import GuessList from './guess-list';
import GuessCounter from './guess-counter';
import Header from './header';

export default function Game(props){
  return(
    <div>
      <Header />
      <section className='game'>
        <Feedback />
        <EntryForm />
        <GuessCounter />
        <GuessList />
      </section>
    </div>
  );
}