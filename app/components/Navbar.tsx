"use client"; // <--- ESTO ES OBLIGATORIO PARA QUE FUNCIONE EL CLICK

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // Estado para saber si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-pixao-blue-900/90 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-sans tracking-tighter">
            PIXAO <span className="text-pixao-gold">LABS</span>
          </span>
        </Link>

        {/* BOTÓN HAMBURGUESA (Móvil) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} // <--- Aquí cambiamos el estado al hacer click
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pixao-gold rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pixao-gold"
        >
            <span className="sr-only">Abrir menú</span>
            {/* Ícono de Hamburguesa (cambia a X si está abierto) */}
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        {/* Aquí usamos la clase 'hidden' o 'block' dependiendo del estado isOpen */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-pixao-blue-800 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-white hover:text-pixao-gold md:p-0 transition-colors" onClick={() => setIsOpen(false)}>Inicio</Link>
            </li>
            <li>
              <Link href="/servicios" className="block py-2 px-3 text-gray-300 hover:text-pixao-gold md:p-0 transition-colors" onClick={() => setIsOpen(false)}>Servicios</Link>
            </li>
            <li>
              <Link href="/casos" className="block py-2 px-3 text-gray-300 hover:text-pixao-gold md:p-0 transition-colors" onClick={() => setIsOpen(false)}>Casos de Éxito</Link>
            </li>
            <li>
              <Link href="/contacto" className="block py-2 px-3 text-gray-300 hover:text-pixao-gold md:p-0 transition-colors" onClick={() => setIsOpen(false)}>Contacto</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}