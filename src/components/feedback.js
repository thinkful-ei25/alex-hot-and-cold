import React from 'react';

export default function Feedback(props){
  return(
  <h2 id='feedback'>{props.status || 'Make Your Guess!'}</h2>
  );
}