import React from 'react';
import './navigation-bar.css';

export default function NavigationBar(props) {
  const links = props.links.map((link, index) => (
    <ul key={index}>
      <a href=''>
        {link.text}
      </a>
    </ul>
 ))
 
  return(
  <div className ='navigation-bar'>
   <nav className='navigation-bar-nav'>
     <ul>
       {links}
     </ul>
   </nav>
  </div>

 );
}