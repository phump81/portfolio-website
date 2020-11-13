import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <h1>Something</h1>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/contact'>Contact Me</Link>
            <Link to='/projects>'>Projects</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/contact'>Contact Me</Link>
            <Link to='/projects>'>Projects</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className='fas fa-laptop-code' />PAUL
            </Link>
          </div>
          <div className='social-icons'>
          <Link className='social-icon-link linkedin'
          to='/'
          target='_blank'
          aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin'></i>
          </Link>
            <Link className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link className='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
