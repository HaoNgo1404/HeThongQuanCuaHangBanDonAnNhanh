import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name} - ${item.price} x {item.quantity}</span>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="total">
                <strong>Total: ${calculateTotal().toFixed(2)}</strong>
            </div>
        </div>
    );
};

export default Cart;