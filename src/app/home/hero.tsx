"use client";

import { IconButton, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-4.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h1" color="white">
          Explora nuestras ofertas sobre las mejores Reservacion de Hotel
        </Typography>
      </div>
    </div>
  </div>
  );
}
export default Hero;
