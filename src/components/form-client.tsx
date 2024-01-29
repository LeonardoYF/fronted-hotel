"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function FormClientes() {
  return (
    <div className=" mt-24  h-screen">
      <Card color="transparent" className="w-1/2 ml-6 mt-2 p-10" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Registro de Cliente
        </Typography>
        <form className="mt-8 mb-2 w-1/2 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Input variant="standard" label="Nombre" placeholder="Nombre" />

            <Input
              placeholder="@gmail.com"
              variant="standard"
              label="email"
              type="email"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <select className="border rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out sm:w-auto">
                <option>DNI</option>
                <option>CARNET EXTRANJERIA</option>
              </select>
              <Input
                placeholder="123456789"
                variant="standard"
                label="Numero de Contacto"
                type="number"
              />
            </div>
          </div>

          <Button className="mt-6" fullWidth>
            Registrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
