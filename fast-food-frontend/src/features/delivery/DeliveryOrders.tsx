import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DeliveryOrder } from '../../types';

const DeliveryOrders: React.FC = () => {
    const deliveryOrders = useSelector((state: RootState) => state.orders.deliveryOrders);

    return (
        <div>
            <h2>Delivery Orders</h2>
            {deliveryOrders.length === 0 ? (
                <p>No delivery orders assigned.</p>
            ) : (
                <ul>
                    {deliveryOrders.map((order: DeliveryOrder) => (
                        <li key={order.id}>
                            <p>Order ID: {order.id}</p>
                            <p>Customer: {order.customerName}</p>
                            <p>Address: {order.address}</p>
                            <p>Status: {order.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DeliveryOrders;