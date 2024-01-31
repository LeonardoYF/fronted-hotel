import React, { useEffect } from "react";
import { Alert, Typography } from "@material-tailwind/react";
import { useModalExito } from "@/context/modalContex";
export default function ModalExito({ mensaje }: { mensaje: string }) {
  const { open, close } = useModalExito();
  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        close(); // Cierra el modal después de 2 segundos
      }, 9000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div className="absolute top-0 right-0 z-50 p-4">
      <Alert
        open={open}
        color="green"
        className="max-w-screen-md"
        icon={<Icon />}
        onClose={() => close()}
      >
        <Typography variant="h5" color="white">
          {mensaje}
        </Typography>
      </Alert>
    </div>
  );
}
