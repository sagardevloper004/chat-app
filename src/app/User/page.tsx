"use client";

import React, { useEffect, useState } from 'react';

const User: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]); // Define users state

        useEffect(() => {
            fetch('/api/user')
                .then(response => response.json())
                .then(data => setUsers(data))
        }, []);

    return (
        <div>
            <h1>Welcome to the User Page</h1>
            <p>This is the User page of the chat app.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;