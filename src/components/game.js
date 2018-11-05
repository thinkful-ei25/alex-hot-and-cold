import React from 'react';

export default function Game(props){
  return(
    <section>
      <h2>Make Your Guess!</h2>
      <form>
        <input placeholder='Enter your Guess'>
        </input>
        <button>
          Guess
        </button>
      </form>
      <p>Guess #COUNTER !</p>
      <ul></ul>
    </section>
  );
}