import React from 'react';
import { Button } from './Button.js';
import './Hero.css';
import '../App.css';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <h1>WELCOME TO MY PORTFOLIO</h1>
      <p>Feel Free To Look Around</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
        ABOUT ME
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
        PROJECTS
        </Button>
      </div>
    </div>
  )
}

export default Hero
