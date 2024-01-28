'use client'
import { useAuth } from '@/hooks/auth';
import { createContext, useContext } from 'react'; // Añade useContext aquí

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    const {user} =useAuth()
   

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};