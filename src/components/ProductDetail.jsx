import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/index.css';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://strapi-store-server.onrender.com/api/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.data) {
                    setProduct(data.data);
                } else {
                    setError("Product data not found");
                }
            })
            .catch(error => setError(error));
    }, [productId]);

    const handleAddToCart = () => {
        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedItems = [...existingItems, product];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div className='loader'></div>;
    }

    return (
        <div className="product-detail">
            <div className="product">
                {product && product.attributes ? (
                    <>
                        <div className="productItemMainInfo">
                            <div className="productImg">
                                <img className='productImage' src={product.attributes.image} alt={product.attributes.title} />
                            </div>
                            <div className="productInfos">
                                <h2 className='productName'>{product.attributes.title}</h2>
                                <h2 className='productCompany'>{product.attributes.company}</h2>
                                <h2>{product.attributes.price}$</h2>
                                <p>{product.attributes.description}.</p>
                                <p>Colors</p>
                                <div className="colorButtons">
                                    {product.attributes.colors.map((color, index) => (
                                        <button key={index} className='color' style={{ backgroundColor: color }}></button>
                                    ))}
                                </div>

                                <div className="amountMenu">
                                    <label htmlFor="amount">Amount</label>
                                    <select id="amount">
                                        {[...Array(20)].map((_, index) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="Button">
                                    <button className='addBtn' onClick={handleAddToCart}>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Data not found</div>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
