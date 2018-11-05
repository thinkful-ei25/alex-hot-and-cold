import React from 'react';

export default function NavigationBar(props) {
 const links = props.links.map((link, index) => (
    <li key={index}>
      <a href=''>
        {link.text}
      </a>
    </li>
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