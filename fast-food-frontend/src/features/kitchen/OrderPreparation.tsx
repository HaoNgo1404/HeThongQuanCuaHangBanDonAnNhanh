import React, { useState } from 'react';

const OrderPreparation: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]); // Replace 'any' with a specific type if available
    const [selectedOrder, setSelectedOrder] = useState<any | null>(null); // Replace 'any' with a specific type if available

    const handleOrderSelect = (order: any) => { // Replace 'any' with a specific type if available
        setSelectedOrder(order);
    };

    const handlePreparationComplete = () => {
        if (selectedOrder) {
            // Logic to mark the order as prepared
            setOrders(orders.filter(order => order.id !== selectedOrder.id));
            setSelectedOrder(null);
        }
    };

    return (
        <div>
            <h2>Order Preparation</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id} onClick={() => handleOrderSelect(order)}>
                        {order.name} - {order.status}
                    </li>
                ))}
            </ul>
            {selectedOrder && (
                <div>
                    <h3>Preparing: {selectedOrder.name}</h3>
                    <button onClick={handlePreparationComplete}>Mark as Prepared</button>
                </div>
            )}
        </div>
    );
};

export default OrderPreparation;