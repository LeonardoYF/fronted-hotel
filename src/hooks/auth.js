import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();
  const params = useParams();
  const accessToken = localStorage.getItem('accessToken');
  const { data: user, error, mutate } = useSWR("/api/user", () =>
  axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Reemplazar accessToken con el token de acceso del usuario
    },
  })
  .then(res => res.data)
  .catch((error) => {
    // Manejar errores de solicitud
    if (error.response && error.response.status === 401) {
      // Manejar caso de usuario no autenticado
      console.error("Usuario no autenticado");
    } else {
      // Manejar otros errores
      console.error("Error en la solicitud:", error);
    }
  })
);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const createUser = async (userData) => {
    
    try {
      const response = await axios.post("/api/crear-usuario", userData);
      return response.data;
    } catch (error) {
      console.error("Error al crear usuario:", error);
      throw error;
    }
  };
  const updateUser = async (userId, userData) => {
    await csrf()
    try {
      const response = await axios.put(`/api/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      throw error;
    }
  };

  const deleteUser = async (userId) => {
    await csrf()
    try {
      const response = await axios.delete(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      throw error;
    }
  };
  const iniciarSesion = async (email, password) => {
    try {
      const response = await axios.post("/api/iniciar-sesion", {
        email,
        password,
      });
      const {token} = response.data;
      localStorage.setItem('accessToken', token); // Extrae el token y los datos del usuario de la respuesta
      return response.data; // Retorna el usuario autenticado si las credenciales son correctas
    } catch (error) {
      if (error.response.status === 422) {
        throw new Error("Los datos que ingresaste son incorrectos");
      } else {
        console.error("Error al iniciar sesión:", error);
        throw error;
      }
    }
  };

  const logout = async () => {
    try {
        await axios.post('/api/logout', null, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        // Limpiar el token de acceso del almacenamiento local
        localStorage.removeItem('accessToken');
        // Actualizar el estado del usuario
        mutate(null);
        // Redirigir al usuario a la página de inicio de sesión
        window.location.pathname = '/user/login';
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        // Manejar el error de cierre de sesión
    }
}

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
    createUser,
    updateUser,
    deleteUser,
    iniciarSesion,
    logout,
  };
};
