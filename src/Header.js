import React from 'react';
import './index.css';

function Header() {
    return (
      <header>
        <nav className='nav-container'>
          <img src={require('./react-logo.png')} className='nav-logo'/>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header;