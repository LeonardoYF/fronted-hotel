import type { Metadata } from "next";
import React from "react";
import Rerservacion from "@/components/reserva";
import { ModalProvider } from "@/context/modalContex";
export const metadata: Metadata = {
  title: "Reservacion",
};
export default function page() {
  return (
    <ModalProvider>
      <Rerservacion></Rerservacion>
    </ModalProvider>
  );
}
