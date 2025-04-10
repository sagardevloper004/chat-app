"use client"
import React, { createContext, useContext, useState } from "react";

interface UserContextType {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};