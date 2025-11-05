import React, { useEffect, useState } from 'react';
import { fetchDeliveryStatus } from '../../api/endpoints';

const DeliveryTracker: React.FC = () => {
    const [deliveryStatus, setDeliveryStatus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDeliveryStatus = async () => {
            try {
                const status = await fetchDeliveryStatus();
                setDeliveryStatus(status);
            } catch (err) {
                setError('Failed to fetch delivery status');
            } finally {
                setLoading(false);
            }
        };

        getDeliveryStatus();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Delivery Tracker</h2>
            <ul>
                {deliveryStatus.map((delivery) => (
                    <li key={delivery.id}>
                        <strong>Order ID:</strong> {delivery.orderId} - <strong>Status:</strong> {delivery.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeliveryTracker;