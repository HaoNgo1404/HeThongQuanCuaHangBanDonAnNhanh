import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import OrderItem from './OrderItem';

const OrdersQueue: React.FC = () => {
    const orders = useSelector((state: RootState) => state.orders.orders);

    return (
        <div className="orders-queue">
            <h2>Incoming Orders</h2>
            {orders.length === 0 ? (
                <p>No incoming orders at the moment.</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <OrderItem key={order.id} order={order} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrdersQueue;