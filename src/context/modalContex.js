'use client'
import { createContext, useContext,useState } from 'react'; // Añade useContext aquí

export const UserContext = createContext();

export const useModalExito = () => useContext(UserContext);

export const ModalProvider = ({ children }) => {

    const [open,setOpen] = useState(false)
    const isOpen = () => setOpen(true)
    const close = () => setOpen(false)
    return (
        <UserContext.Provider value={{open,close,isOpen}}>
            {children}
        </UserContext.Provider>
    );
};