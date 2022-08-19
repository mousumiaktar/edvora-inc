import React from 'react';
import useOrders from '../hooks/useOrders';
import Order from './Order';
import './Orders.css'

const Orders = () => {
    const [orders] = useOrders();

    return (
        <div className='full-orders'>

            <h2 style={{color:'#0087FF'}}><b><i>Our All Orders: {orders.length}</i></b></h2>

            <div className='container orders-area'>
                {
                    orders.slice(0, 6).map(order => <Order
                    key={order.order_id}
                    order={order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Orders;