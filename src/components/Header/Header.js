import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className='header'>
      <div className='header-menu'>
        <a>BitCoin $33,505</a>
        <a>SOL $555</a>
        <a>FOX $666</a>
        <a>{}portfolio</a>
      </div>
    </header>
  );
}

export default Header;