import '../css/index.css';
import React from 'react';

function Cart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    return (
        <>
            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((cartItem, index) => (
                        <div className="cartItem">
                            <div key={index} className="cart-item">
                                <img src={cartItem.attributes.image} alt={cartItem.attributes.title} />
                                <div>
                                    <h3>{cartItem.attributes.title}</h3>
                                    <p>{cartItem.attributes.price}$</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Cart;
