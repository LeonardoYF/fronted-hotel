"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useUser } from "@/context/useContex";
import { Badge, Avatar } from "@material-tailwind/react";
const NAV_MENU = [
  "Home",
  "Habitaciones",
  "Informacion",
  "Contactanos",
];
const NAV_LINKS = [
  "/home",
  "/home/habitaciones",
  "/home/informacion",
  "/home/contactanos",
];
type NavItemProps = {
  children: React.ReactNode;
  link: string;
};

function NavItem({ children, link }: NavItemProps) {
  return (
    <li>
      <Typography
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        <Link href={link}>{children}</Link>
      </Typography>
    </li>
  );
}

export function Navbar() {
  const {logout} = useAuth()
  const router = useRouter();
  const { user } = useUser();
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function handleOpen() {
    setOpen((cur) => !cur);
  }
  const handleLogin= () => {
    router.push('/user/login');
  }
  const handleReserva = ()=>{
    router.push('/home/habitaciones');
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 bg-blue-gray-900"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          placeholder={"Tipografia"}
          as="a"
          href="/home"
          target="_blank"
          className="text-lg font-bold"
          color={isScrolling ? "white" : "white"}
        >
          Oasis
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-white" : "text-white"
          }`}
        >
          {NAV_MENU.map((name, index) => (
            <NavItem key={name} link={NAV_LINKS[index]}>
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button onClick={handleReserva} color={isScrolling ? "white" : "white"}>Reserva</Button>
          {user ? (
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Button className="bg-transparent">
                  <Badge overlap="circular" placement="bottom-end">
                    <Avatar
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      alt="profile picture"
                    />
                  </Badge>
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem onClick={logout}>Cerrar Sesion</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            // Si el usuario no está autenticado, muestra el botón "Ingresar"

            <Button variant="text" color="white">
              <Link href="/user/login">Ingresar</Link>
            </Button>
          )}
        </div>
        <IconButton
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "white" : "white"}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((name, index) => (
              <NavItem key={name} link={NAV_LINKS[index]}>
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <Button onClick={handleLogin} variant="text">Iniciar Sesion</Button>
            <Button onClick={handleReserva} color="gray">Reserva</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
