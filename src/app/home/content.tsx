"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import Carrus from "@/components/carrusel";

export function Content() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Typography placeholder={"Texto"} className="my-12 font-normal !text-gray-500 text-justify">
          Adéntrate en un mundo de lujo y comodidad donde cada detalle está
          diseñado para elevar tu experiencia. En nuestro hotel, la grandeza se
          encuentra en cada rincón , desde nuestras elegantes habitaciones hasta
          nuestras exquisitas instalaciones. Disfruta de un servicio impecable
          que superará tus expectativas y déjate cautivar por la belleza de
          nuestro entorno. Ya sea que busques relajarte junto a la piscina,
          deleitarte con una deliciosa cena gourmet o explorar las maravillas de
          la ciudad, aquí encontrarás todo lo que necesitas para una estancia
          inolvidable. Haz tu reserva ahora y descubre por qué somos el destino
          preferido de los viajeros que buscan lo mejor.
        </Typography>

        <Typography placeholder={"Texto"}  variant="h2" color="blue-gray" className="mt-8 mb-6">
          Explora nuestras habitaciones
        </Typography>

        <Typography placeholder={"Texto"}  className="my-10 font-normal !text-gray-500">
          Echael un vistazo a nuestras habitaciones, te sorprenderan!
        </Typography>
        <Carrus />
        <Typography placeholder={"Texto"}  variant="small" className="font-normal !text-gray-500">
          Fotos extraidas de las habitaciones
        </Typography>

        <div className="container mx-auto px-4 py-20">
          <div className=" md:flex items-center justify-between">
            <div className="mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl">
              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/image/avatar1.jpg"
                  className="rounded-2xl"
                  alt="photo"
                />
              </div>
              <div>
                <Typography placeholder={"Texto"} 
                  variant="h5"
                  className="mb-4 md:mb-0"
                  color="blue-gray"
                >
                  Universidad Nacional de Piura
                </Typography>
                <Typography placeholder={"Texto"}  className="w-full md:w-10/12 font-normal !text-gray-500">
                  Realizado por estudiantes de la Universidad Nacional de Piura
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
