import React from 'react';
import './navigation-bar.css';

export default function NavigationBar(props) {
 
  return(
  <div className ='navigation-bar'>
   <nav className='navigation-bar-nav'>
     <ul>
       <li><a className='instructions' href='#'>What ?</a></li>
       <li><a className='new-game' href='#'>+ New Game</a></li>
     </ul>
   </nav>
  </div>

 );
}