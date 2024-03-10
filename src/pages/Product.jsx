import { Link } from 'react-router-dom';
import '../css/index.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import Products from '../components/Products';

function Product() {
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
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                    </div>
                    <div className="headerMenu">
                        <NightlightIcon />
                        <ShoppingCartIcon />
                    </div>
                </header>
                <div className="heroContainer">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default Product;
