import type { Metadata } from "next";
import Habitaciones from "../../../components/habitaciones";
export const metadata: Metadata = {
    title: "Habitaciones",
  };
export default function page(){
    return(
        <div>
            <h1>Habitaciones</h1>
            <Habitaciones>

            </Habitaciones>
        </div>
    )
}