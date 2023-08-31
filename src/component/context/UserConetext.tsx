import React, { createContext, useState } from 'react';

type UserContextProp = {
    children: React.ReactNode;
};

export type AuthUser = {
    name: string;
    email: string;
};

type UserContexts= {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext<UserContexts | null>(null);

const UserContextProvider = ({ children }: UserContextProp) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
