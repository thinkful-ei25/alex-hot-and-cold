import React from 'react';
import NavigationBar from './navigation-bar';
import './header.css'

export default function Header(props) {
  
  return(
    <header>
      <NavigationBar />
      <h1 className='header'>Hot or Cold</h1>
    </header>
  );
}