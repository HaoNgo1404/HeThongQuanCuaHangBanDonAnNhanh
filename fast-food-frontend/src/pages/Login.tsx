import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSlice } from '../store/slices/authSlice';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Replace with your login API call
            const response = await fakeApiLogin(email, password);
            dispatch(authSlice.actions.login(response.data));
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

// Fake API login function for demonstration purposes
const fakeApiLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@example.com' && password === 'password') {
                resolve({ data: { user: { email } } });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
};

export default Login;