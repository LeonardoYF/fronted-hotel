import "../globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components/layout";
import { Footer } from "@/components";
import Navbar from "@/components/navbar";
import {HabitacionProvider} from '@/context/useHabitacion'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oasis",
  description:
    "Download Tailwind Blog Page, a Free Template developed by Creative Tim. Based on Tailwind CSS and Material Tailwind, see the live demo on our site and start sharing your stories with the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>

        <Navbar />
        <Layout>
          <HabitacionProvider>
          {children}
          </HabitacionProvider>
        </Layout>
        <Footer />

      </body>
    </html>
  );
}
