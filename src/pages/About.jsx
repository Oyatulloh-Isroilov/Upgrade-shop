import { Link } from 'react-router-dom';
import '../css/index.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';

function About() {
  return (
    <>
      <div className="container">
        <header className='header'>
          <div className="headerLogo">
            <button className='logoBtn'>C</button>
          </div>
          <div className="headerLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Products</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="headerMenu">
            <NightlightIcon />
            <ShoppingCartIcon />
          </div>
        </header>
        <div className="heroContainer">
          <div className="infos aboutInfo">
            <h1>We Love <span>comfy</span></h1>
            <p className='aboutMinInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
