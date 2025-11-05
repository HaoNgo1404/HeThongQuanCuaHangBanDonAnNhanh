import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/slices/cartSlice';
import { processOrder } from '../../api/endpoints';
import './Checkout.css';

const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            await processOrder(cartItems, paymentInfo);
            dispatch(clearCart());
            setSuccess(true);
        } catch (err) {
            setError('Failed to process the order. Please try again.');
        }
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Order processed successfully!</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Card Number:</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Expiration Date:</label>
                    <input
                        type="text"
                        name="expirationDate"
                        value={paymentInfo.expirationDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        type="text"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default Checkout;