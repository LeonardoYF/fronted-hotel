'use client'
import { createContext, useContext, useState } from 'react';

export const HabitacionContext = createContext();

export const useHabitacion = () => useContext(HabitacionContext);

export const HabitacionProvider = ({ children }) => {
    const [habitacion, setHabitacion] = useState("");
    const [total, seTotal] = useState(0);

    const insertarHabitacion = (nuevaHabitacion) => {
        setHabitacion(nuevaHabitacion);
    };
    const calculoTotal = (dias)=>{
        seTotal(dias*habitacion.precio)
    }
    return (
        <HabitacionContext.Provider value={{ habitacion, insertarHabitacion,calculoTotal,total }}>
            {children}
        </HabitacionContext.Provider>
    );
};