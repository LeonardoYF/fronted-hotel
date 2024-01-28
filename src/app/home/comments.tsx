"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import CommentCard from "@/components/comment-card";
import { NewComment } from "@/components/new-comment";

const COMMENTS = [
  {
    img: "/image/avatar1.jpg",
    name: "Diego Ordinola",
    hours: " · 7 minutes ago",
    desc: "¡Increíble experiencia en este hotel! Desde el momento en que llegamos, nos recibieron con una cálida bienvenida y un servicio impecable. Las habitaciones son espaciosas y elegantes, con vistas impresionantes. Disfrutamos de las deliciosas opciones gastronómicas que ofrece el restaurante, y el personal siempre estuvo atento a nuestras necesidades. Sin duda, volveremos en nuestro próximo viaje.",
  },
  {
    img: "/image/avatar2.jpg",
    name: "Roberto Pintado",
    hours: " · 2 hours ago",
    desc: "¡El lugar perfecto para unas vacaciones en familia! Nuestros hijos se divirtieron muchísimo en la piscina y en las actividades organizadas por el hotel. Nos encantó la atención personalizada que recibimos desde el momento de la reserva hasta nuestra salida. Las instalaciones están impecables y la ubicación es ideal para explorar la ciudad. Definitivamente, recomendamos este hotel a todas las familias que buscan una experiencia inolvidable.",
  },
];

export function Comments() {
  return (
    <section className="w-full max-w-2xl mx-auto flex flex-col px-5 pb-20">
      <Typography placeholder={"Texto"}  variant="h4" className=" md:text-center" color="blue-gray">
        3 Commentarios
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        {COMMENTS.map((props, idx) => (
          <CommentCard key={idx} {...props} />
        ))}
        <div className="md:pl-14">
          <CommentCard
            desc="nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.Don't forget, You're awesome!"
            img="/image/avatar1.jpg"
            name="Tina Andrew "
            hours=" · 2 hours ago"
          />
        </div>
      </div>
      <Typography placeholder={"Texto"} 
        variant="h4"
        className="my-6 md:my-14 md:text-center"
        color="blue-gray"
      >
        Postea tu Comentario
      </Typography>
      <NewComment />
    </section>
  );
}
export default Comments;
