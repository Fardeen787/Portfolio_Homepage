import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Portfolio Types</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/frontend.jpg'
              text='Front End Developer'
              label='Front-End'
              path='/services'
            />
            <CardItem
              src='images/backend.jpg'
              text='Backend Developer'
              label='Back-End'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/graphic.jpg'
              text='Graphics Designer'
              label='Graphics  Design'
              path='/services'
            />
            <CardItem
              src='images/dbms.jpg'
              text='Database Manager'
              label='Database'
              path='/products'
            />
            <CardItem
              src='images/network.jpg'
              text='Networking'
              label='Network'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;