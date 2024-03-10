import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/index.css';

function ThreeProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        fetch("https://strapi-store-server.onrender.com/api/products")
            .then(res => res.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setProducts(data.data.slice(0, 3));
                } else {
                    console.error("API javobi kutilgan formatda emas:", data);
                }
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleCardClick = (product) => {
        navigate(`/products/${product.id}`);
    };

    return (
        <div className="items">
            {loading ? (
                <div className="loader"></div>
            ) : (
                products.map(product => (
                    <div key={product.id} className="item" onClick={() => handleCardClick(product)}>
                        <div className="product">
                            <img src={product.attributes.image} alt={product.attributes.title} />
                            <h2>{product.attributes.title}</h2>
                            <p>{product.attributes.price}$</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ThreeProducts;
