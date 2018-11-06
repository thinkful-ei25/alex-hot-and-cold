import React from 'react';

import './guess-list.css'

export default function GuessList(props) {
  return(
    <ul id='guessList' classname='guessList'>
      <li classname='guess'>{props.guess}</li>
    </ul>
  );
}
