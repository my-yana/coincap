import React from 'react';
import './MoreAboutCoin.css';
import image from '../../img/image.jpeg';

function MoreAboutCoin(){
  return(
    <div className='about-coin'>
      <div className='coin-name'>
        <h1>Coin</h1>
      </div>
      <div className='coin-description'>
        <p>coin description here</p>
        <p>coin description here</p>
        <p>coin description here</p>
        <p>coin description here</p>
        <p>coin description here</p>
      </div>
      <div className='coin-diagram'>
        <img src={image} alt='tete' />
      </div>
    </div>
  )
}
export default MoreAboutCoin;