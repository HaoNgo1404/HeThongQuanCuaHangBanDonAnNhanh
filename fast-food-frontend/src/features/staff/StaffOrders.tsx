import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import OrderCard from '../../components/common/OrderCard';

const StaffOrders: React.FC = () => {
    const orders = useSelector((state: RootState) => state.orders.orders);

    return (
        <div className="staff-orders">
            <h1>Staff Orders</h1>
            {orders.length === 0 ? (
                <p>No orders available.</p>
            ) : (
                orders.map(order => (
                    <OrderCard key={order.id} order={order} />
                ))
            )}
        </div>
    );
};

export default StaffOrders;