"use client"
import { useUser } from "../../Context/UserContext";
import { useEffect, useState } from "react";
import io from "socket.io-client";

import { Socket } from "socket.io-client";

let socket: Socket;

const Chat: React.FC = () => {
    const { email } = useUser();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        // Connect to the Socket.IO server
        console.log('call socket')
        socket = io({
            path: "/api/socket",
        });
        console.log('email',email)
        socket.on("message", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit("message", {
                userId: 1,
                msgTxt: message,
                username: email.toUpperCase(),
            });
            setMessage("");
        }
    };

    return (
        <div>
            <h1>Chat App</h1>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md shadow-md mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    {email?.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p className="text-lg font-semibold">{email || "Guest"}</p>
                    <p className="text-sm text-gray-500">Logged in</p>
                </div>
            </div>
            <div>
                {messages.map((msg:any, index) => (
                    <div key={index} className="p-2 border-b border-gray-300">
                        <span className="font-bold text-blue-600">{msg.username}: </span>
                        <span className="text-gray-800">{msg.msgTxt}</span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;