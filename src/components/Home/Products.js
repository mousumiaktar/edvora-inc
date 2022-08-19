import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://assessment.api.vweb.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='card-area'>
            <div className='container row g-5 pt-5 card-items'>
                {
                    products.slice(0, 9).map(product => <Product
                        key={product.product_id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;