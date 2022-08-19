import React from 'react';
import './Order.css'

const Order = ({ order }) => {
    const {order_id, order_date, product_id, quantity, user_id} = order;

    return (
        <div className='order-item-area'>
            <h4>Product-id: {product_id}</h4>
            <h5>order-date: {order_date}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>User-id: {user_id}</h5>
        </div>
    );
};

export default Order;