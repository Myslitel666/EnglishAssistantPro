//React Import
import React, { createContext, useContext, ReactNode, useState } from 'react';

type User = {
    userId: number;
    userRole: string;
    username: string;
}

export interface UserContextProps {
    userIdState: [number, React.Dispatch<React.SetStateAction<number>>];
    userRoleState: [string, React.Dispatch<React.SetStateAction<string>>];
    usernameState: [string, React.Dispatch<React.SetStateAction<string>>];
    setUser: (userId: number, userRole: string, username: string) => void;
    getUser: () => User;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userId, setUserId] = useState(-1);
    const [userRole, setUserRole] = useState('');
    const [username, setUsername] = useState('');

    const getUser = (): User => {
        return {
            userId: userId,
            userRole: userRole,
            username: username,
        };
    };

    const setUser = (userId: number, userRole: string, username: string) => {
        setUserId(userId);
        setUserRole(userRole);
        setUsername(username);
    }

    const contextValue: UserContextProps = {
        userIdState: [userId, setUserId],
        userRoleState: [userRole, setUserRole],
        usernameState: [username, setUsername],
        setUser: setUser,
        getUser: getUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
