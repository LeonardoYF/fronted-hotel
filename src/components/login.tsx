'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  const { iniciarSesion } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usuario = await iniciarSesion(email, password);
      router.push("/home");
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h3" color="black">
        Iniciar sesión
      </Typography>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <Card className="w-96">
          <CardBody className="flex flex-col gap-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              label="Email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              label="Contraseña"
            />
            <div className="-ml-2.5">
              <Checkbox
                label="Recordar sesión"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </div>
            {error && (
              <Typography variant="body" color="red">
                {error}
              </Typography>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="blue" type="submit">
              Iniciar sesión
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              ¿No tienes una cuenta?{" "}
              <Link className="font-bold " href="/user/registro">
                Regístrate
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;