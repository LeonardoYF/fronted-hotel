'use client'
import { Carousel } from "@material-tailwind/react";
 
export default function carrusel() {
  return (
    <Carousel placeholder={"Carrusel de imagenes"} className="rounded-xl">
      <img
        src="https://leonardoyarleque21.files.wordpress.com/2024/01/habitacion1.jpg.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://leonardoyarleque21.files.wordpress.com/2024/01/habitacion2.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://leonardoyarleque21.files.wordpress.com/2024/01/habitacion3.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}