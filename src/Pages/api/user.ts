// pages/api/users.js
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
    ];
    console.log(`Request method: ${req.method}`); // Example usage of 'req'
    res.status(200).json(users);
}