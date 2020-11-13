import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check These Out</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='images/image4.jpg'
            text='About Me'
            label='Fancy Label'
            path='/about-me'
             />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
