import React from 'react';

function Header() {
    return (
      <header>
        <nav className='nav-container'>
          <img src={require('../assets/react-logo.png')} alt='React logo' className='nav-logo'/>
          <h3>ReactFacts</h3>
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