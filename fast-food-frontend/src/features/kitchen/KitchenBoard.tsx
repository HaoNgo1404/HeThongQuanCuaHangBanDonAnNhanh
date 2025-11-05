import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import OrderCard from './OrderCard';

const KitchenBoard: React.FC = () => {
    const orders = useSelector((state: RootState) => state.orders.orders);

    return (
        <div className="kitchen-board">
            <h1>Kitchen Orders</h1>
            <div className="orders-list">
                {orders.length === 0 ? (
                    <p>No orders to prepare.</p>
                ) : (
                    orders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))
                )}
            </div>
        </div>
    );
};

export default KitchenBoard;