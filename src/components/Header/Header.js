import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className='header'>
      <div className='header-menu'>
        <a>Coin $444</a>
        <a>Coin $555</a>
        <a>Coin $666</a>
        <a>{}portfolio</a>
      </div>
    </header>
  );
}

export default Header;