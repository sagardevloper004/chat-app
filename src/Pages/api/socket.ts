import { Server } from "socket.io";
import { NextApiRequest, NextApiResponse } from "next";

let io: Server | undefined;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!io) {
        const server = (res.socket as any).server;
        if (!server) {
            throw new Error("Server is not available on res.socket");
        }
        io = new Server(server, {
            path: "/api/socket",
        });

        io.on("connection", (socket) => {
            console.log("User connected");

            socket.on("message", (msg) => {
                // Broadcast message to all connected clients
                io!.emit("message", msg);
            });

            socket.on("disconnect", () => {
                console.log("User disconnected");
            });
        });
    res.end(); // End the response
}   res.end();
}