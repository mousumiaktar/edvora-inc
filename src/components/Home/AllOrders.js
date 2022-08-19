import React from 'react';
import useOrders from '../hooks/useOrders';
import AllSingleOrders from './AllSingleOrders';

const AllOrders = () => {
    const [orders] = useOrders();
    console.log(orders);

    return (
        <div className='full-orders'>
            <h2 style={{ color: '#0087FF' }}><b><i>Our All Orders: {orders.length}</i></b></h2>

            <div className='container orders-area'>
                {
                    orders.slice(11, 1000).map(order => <AllSingleOrders
                        key={order.order_id}
                        order={order}
                    ></AllSingleOrders>)
                }
            </div>
        </div>
    );
};

export default AllOrders;