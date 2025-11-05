import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../../store/slices/authSlice';
import { RootState } from '../../store';

const AdminPanel: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.auth.users);
    const loading = useSelector((state: RootState) => state.auth.loading);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDeleteUser = (userId: string) => {
        dispatch(deleteUser(userId));
    };

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} 
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AdminPanel;