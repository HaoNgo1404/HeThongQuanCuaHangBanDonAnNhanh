import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../../api/endpoints';
import ProductCard from './ProductCard';

const MenuList: React.FC = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const getMenuItems = async () => {
            try {
                const items = await fetchMenuItems();
                setMenuItems(items);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        getMenuItems();
    }, []);

    return (
        <div className="menu-list">
            <h2>Menu</h2>
            <div className="menu-items">
                {menuItems.map(item => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default MenuList;