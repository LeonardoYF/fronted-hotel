import { Typography } from "@material-tailwind/react";
import Link from "next/link";


const LINKS = [
  {
    title: "Páginas",
    items: [
      { title: "Iniciar Sesión", link: "/user/login" },
      { title: "Registrarse", link: "/user/registro" },
      { title: "Reservas", link: "/reservas" },
      { title: "Habitaciones", link: "/habitaciones" },
      { title: "Información", link: "/informacion" },
      { title: "Contacto", link: "/contacto" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Términos y Condiciones", link: "/terminos" },
      { title: "Privacidad", link: "/privacidad" },
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
 

  return (
    <footer className="mt-10 px-8 pt-20 p-6 bg-blue-gray-600 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <Typography
            as="a"
            href="/"
            variant="h4"
            className="mb-6 text-xl font-bold hover:text-gray-200"
          >
            Oasis
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography variant="h6" className="mb-4">
                  {title}
                </Typography>
                <ul>
                  {items.map(({ title: linkTitle, link }) => (
                    <li key={link}>
                      <Link href={link}>
                        
                          {linkTitle}
                        
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Typography variant="body" className="mt-8 text-center">
          &copy; {CURRENT_YEAR} Oasis. Todos los derechos reservados.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
