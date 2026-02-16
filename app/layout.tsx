import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Importamos las fuentes correctas
import './globals.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configuración de la fuente Inter (para textos largos)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// Configuración de la fuente Montserrat (para títulos)
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "Pixao Labs | Consultoría de Software",
  description: "Arquitectura de software y soluciones digitales de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aquí aplicamos las variables de las fuentes al body */}
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}