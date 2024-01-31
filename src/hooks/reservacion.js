import axios from "@/lib/axios";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export const useReservacion = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  
  const reservar = async (data) => {
    await csrf()
    try {
        const response = await axios.post("/api/reservar", data);
        if (response.status === 200) {
            return { success: true, message: "Reserva exitosa" };
        } else {
            throw new Error("La reserva falló. Por favor, inténtalo de nuevo.");
        }
    } catch (error) {
        console.error("Error al reservar la habitación", error);
        throw error;
    }
};


  const csrf = () => axios.get("/sanctum/csrf-cookie");
    
  const indexReservacion = async () => {
    await csrf()
    try {
      const response = await axios.get("/api/habitacions");
      return response.data;
    } catch (error) {
      console.error("Error al extraer habitaciones", error);
      throw error;
    }
  };


  



  return {
    reservar

  };
};