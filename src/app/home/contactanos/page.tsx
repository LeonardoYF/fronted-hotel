import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contactanos",
  };
import Contactanos from '@/components/contactanos.jsx'
function page(){
    return(
        <Contactanos></Contactanos>
    )
}
export default page;