import React from 'react';
import { MenuList } from '../features/customer/MenuList';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our Fast Food Restaurant</h1>
                <p>Delicious food delivered to your door!</p>
                <MenuList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;