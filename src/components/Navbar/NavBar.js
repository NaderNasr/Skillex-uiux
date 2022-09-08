import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './Nav.css'
import { Container } from '@mui/system';


const NavBar = () => {

  return (
    <AppBar position="sticky" id='navbar' elevation={0}>
      <Container id='container'>
        <h1 id='logo'>Traverse</h1>
        <nav>
          {/* <ul className='nav-links'>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/'>About</a></li>
          </ul> */}
        </nav>
        <a className='cta' href='https://www.nadernasr.ca'>
        <button>Contact</button>
        </a>
      </Container>
    </AppBar>
  );
};
export default NavBar;
