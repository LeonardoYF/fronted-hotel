"use client";
import React, { useState, useEffect } from "react";
import { useHabitacion } from "../hooks/habitacion";
import Habitacion from "./habitacion";
// Asegúrate de importar la función indexHabitacion

const Habitaicones = () => {
  const { indexHabitacion } = useHabitacion();
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const obtenerHabitaciones = async () => {
      try {
        const habitacionesData = await indexHabitacion();
        setHabitaciones(habitacionesData);
      } catch (error) {
        console.error("Error al obtener las habitaciones:", error);
      }
    };

    obtenerHabitaciones();
  }, []); // El array vacío como segundo argumento asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
      
      {habitaciones.map((habitacion) => (
        <Habitacion  habitacion={habitacion} />
      ))}
    </div>
  );
};

export default Habitaicones;
