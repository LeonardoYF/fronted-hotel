import axios from "@/lib/axios";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export const useHabitacion = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  

  const csrf = () => axios.get("/sanctum/csrf-cookie");
    
  const indexHabitacion = async () => {
    try {
      const response = await axios.get("/api/habitacions");
      return response.data;
    } catch (error) {
      console.error("Error al extraer habitaciones", error);
      throw error;
    }
  };

  const getHabitaciones = async (props) => {
    try {
      const response = await axios.post("/api/habitaciones", props);
      const {habitaciones, categorias, detalles} = response.data;
      return {habitaciones, categorias, detalles};
    } catch (error) {
      console.error("Error al extraer habitaciones", error);
      throw error;
    }
  }; 

 

  return {
    indexHabitacion,
    getHabitaciones
  };
};