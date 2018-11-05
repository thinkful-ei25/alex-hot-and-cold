import React from 'react';
import './navigation-bar.css';

export default function NavigationBar(props) {
  const links = [
    {text: 'What ?'},
    {text: '+ New Game'}
  ];
 
  return(
  <div className ='navigation-bar'>
   <nav className='navigation-bar-nav'>
     <ul>
       <li><a href='#'>What ?</a></li>
       <li><a href='#'>+ New Game</a></li>
     </ul>
   </nav>
  </div>

 );
}