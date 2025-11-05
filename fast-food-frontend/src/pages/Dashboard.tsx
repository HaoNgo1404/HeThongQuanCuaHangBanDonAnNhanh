import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import MenuList from '../features/customer/MenuList';
import OrdersQueue from '../features/staff/OrdersQueue';
import KitchenBoard from '../features/kitchen/KitchenBoard';
import Reports from '../features/manager/Reports';
import DeliveryTracker from '../features/delivery/DeliveryTracker';

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <h1>Dashboard</h1>
            <div>
                <h2>Customer Section</h2>
                <MenuList />
            </div>
            <div>
                <h2>Staff Section</h2>
                <OrdersQueue />
            </div>
            <div>
                <h2>Kitchen Section</h2>
                <KitchenBoard />
            </div>
            <div>
                <h2>Manager Section</h2>
                <Reports />
            </div>
            <div>
                <h2>Delivery Section</h2>
                <DeliveryTracker />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;