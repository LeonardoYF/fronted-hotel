import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Informacion",
  };
import Informacion from '@/components/informacion.jsx';
export default function page(){
    return(
       <Informacion/>
    )
}