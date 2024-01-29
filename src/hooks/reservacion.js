import axios from "@/lib/axios";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export const useHabitacion = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  

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

  

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated);
    }

    if (middleware === "auth" && error) {
      logout();
    }
  }, [user, error]);

  return {
    user,
    indexHabitacion
  };
};