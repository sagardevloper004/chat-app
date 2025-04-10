import React, { useState, useEffect } from 'react';

import io from "socket.io-client";

import { Socket } from "socket.io-client";
let socket: Socket;

interface Message {
    id: number;
    text: string;
    sender: string;
}

const TestChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        // Connect to the Socket.IO server
        socket = io({
            path: "/api/socket",
        });

        socket.on("message", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);



    const handleSendMessage = async () => {
        if (!newMessage.trim()) return;

        const messageToSend: Message = {
            id: Date.now(),
            text: newMessage,
            sender: 'You', // Replace with dynamic sender if needed
        };

        try {
            // Send message to API
            if (messageToSend) {
                socket.emit("message", messageToSend);
                setNewMessage("");
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Chat Application</h1>
            {loading ? (
                <p>Loading messages...</p>
            ) : (
                <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                    {messages.map((message) => (
                        <div key={message.id} style={{ marginBottom: '10px' }}>
                            <strong>{message.sender}:</strong> {message.text}
                        </div>
                    ))}
                </div>
            )}
            <div style={{ marginTop: '10px' }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    style={{ width: '80%', padding: '10px' }}
                />
                <button onClick={handleSendMessage} style={{ padding: '10px', marginLeft: '10px' }}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatPage;