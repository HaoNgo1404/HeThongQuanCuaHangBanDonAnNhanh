import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User } from '../types';

const Account: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div className="account-page">
            <h1>Account Details</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
            ) : (
                <p>No user information available.</p>
            )}
        </div>
    );
};

export default Account;