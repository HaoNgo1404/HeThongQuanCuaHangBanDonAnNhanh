import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/slices/authSlice';

const useAuth = () => {
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            dispatch(login(token));
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, [dispatch]);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        dispatch(login(token));
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        dispatch(logout());
    };

    return { isAuthenticated, loading, handleLogin, handleLogout };
};

export default useAuth;