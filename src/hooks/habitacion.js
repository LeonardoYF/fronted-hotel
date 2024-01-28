import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export const useHabitacion = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/users", () =>
    axios
      .get("/api/users")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");
    
  const indexHabitacion = async () => {
    csrf
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