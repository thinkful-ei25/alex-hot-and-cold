import React from 'react';
import NavigationBar from './navigation-bar';
import './header.css'

export default function Header(props) {
  const links = [
    {text: 'What ?'},
    {text: '+ New Game'}
  ];
  
  return(
    <header>
      <NavigationBar links={links} />
      <h1 className='header'>Hot or Cold</h1>
    </header>
  );
}