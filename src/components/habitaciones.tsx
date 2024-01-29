"use client";
import React, { useState, useEffect } from "react";
import { useHabitacion } from "../hooks/habitacion";
import Habitacion from "./habitacion";
import { Input } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Select, Option, Button } from "@material-tailwind/react";

const Habitaciones = () => {
  const { getHabitaciones} = useHabitacion();
  const [habitaciones, setHabitaciones] = useState([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [detalles, setDetalles] = useState<Detalle[]>([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroDetalle, setFiltroDetalle] = useState("");

  useEffect(() => {
    const obtenerHabitaciones = async () => {
      try {
        const habitacionesData = await getHabitaciones();
        setHabitaciones(habitacionesData.habitaciones);
        setCategorias(habitacionesData.categorias);
        setDetalles(habitacionesData.detalles);
      } catch (error) {
        console.error("Error al obtener las habitaciones:", error);
      }
    };
    obtenerHabitaciones();
  }, []);

  interface Categoria {
    id: string;
    name: string;
  }

  interface Detalle {
    id: string;
    name: string;
  }
  const filtrarHabitaciones = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const habitacionesFiltradas = await getHabitaciones({
        name: filtroNombre,
        categoria_id: filtroCategoria,
        detalle_id: filtroDetalle,
      });
      
      // Utiliza la estructura de la respuesta directamente
      setHabitaciones(habitacionesFiltradas.habitaciones);
      setCategorias(habitacionesFiltradas.categorias);
      setDetalles(habitacionesFiltradas.detalles);
    } catch (error) {
      console.error("Error al filtrar las habitaciones:", error);
    }
  };

  return (
    <div className="mt-16">
      <div className="border-b-2  rounded-e-sm shadow-md">
        <Typography placeholder={"habitaciones"}>
          <h2 className="text-center font-bold">Filtrar Habitaciones</h2>
        </Typography>

        <form onSubmit={filtrarHabitaciones} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto flex p-10">
          <Input
            variant="standard"
            label="Nombre"
            placeholder="Nombre"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
          <div>
            <select  value={filtroCategoria} className="border rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out w-full sm:w-auto" onChange={(e)=>setFiltroCategoria(e.target.value)}>
            {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.name}
                </option>
              ))}
              
            </select>
           
          </div>
          <div>
          <select  value={filtroDetalle} className="border rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out w-full sm:w-auto" onChange={(e)=>setFiltroDetalle(e.target.value)}>
            {detalles.map((detalle) => (
                <option key={detalle.id} value={detalle.id}>
                {detalle.name}
              </option>
              ))}
              
            </select>
            
          </div>
          <Button
            className="w-20"
            size="sm"
            color="blue"
            variant="filled"
            type="submit"
          >
            Buscar
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
        {habitaciones.map((habitacion) => (
          <Habitacion habitacion={habitacion} />
        ))}
      </div>
    </div>
  );
};

export default Habitaciones;
