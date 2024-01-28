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
  Button,
} from "@material-tailwind/react";

const Registro = () => {
  const { createUser } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUser({ name, email, password });
      router.push("/home");
    } catch (error) {
      setError("Error al crear usuario. Por favor, verifica tus datos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography variant="h3" color="black">
        Registro
      </Typography>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <Card className="w-96">
          <CardBody className="flex flex-col gap-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Usuario"
              color="teal"
              label="Usuario"
            />
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
            {error && (
              <Typography variant="body" color="red">
                {error}
              </Typography>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="blue" type="submit">
              Crear Cuenta
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              ¿Ya tienes una cuenta?{" "}
              <Link className="font-bold" href="/user/login">
                Iniciar Sesión
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Registro;
