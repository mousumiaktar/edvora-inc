import useOrders from '../hooks/useOrders';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
import Button from 'react-bootstrap/Button';
import './Orders.css'

const Orders = () => {
    const [orders] = useOrders();

    const navigate = useNavigate();
    const handleOrders = () => {
        navigate('/allorders');
   }

    return (
        <div className='full-orders'>
            <h2 style={{color:'#0087FF'}}><b><i>Our All Orders: {orders.length}</i></b></h2>
            <div className='container orders-area'>
                {
                    orders.slice(0,10).map(order => <Order
                    key={order.order_id}
                    order={order}
                    ></Order>)
                }
                <Button onClick={handleOrders} variant="info">see more</Button>{' '}
            </div>
        </div>
    );
};

export default Orders;