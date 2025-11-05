import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './DashboardLayout.css';

const DashboardLayout: React.FC = () => {
    return (
        <div className="dashboard-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DashboardLayout;