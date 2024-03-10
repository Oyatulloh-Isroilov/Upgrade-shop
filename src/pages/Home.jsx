import { Link, useNavigate } from 'react-router-dom';
import '../css/index.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import carousel from '../assets/images/carousel.png'
import * as React from 'react';
import ThreeProducts from '../components/ThreeProducts';
import { Navigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  function handleProduct() {
    navigate("/product")
  }

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
          <div className="infos">
            <h1>We are changing the way people shop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae quas ab minus natus quidem.</p>
            <button className='ourProBtn' onClick={handleProduct}>OUR PRODUTCS</button>
          </div>
          <div className="CarouselImg">
            <img src={carousel} />
          </div>
        </div>
        <div className="featuredProducts">
          <div className="featuredHeader">
            <h2>Featured Products</h2>
          </div>
          <div className="featuredHero">
            <ThreeProducts />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
