import React from 'react';

export default function GuessList(props) {
  return(
    <ul id='guessList'>
      <li classname='guesses'>{props.guess}</li>
    </ul>
  );
}
