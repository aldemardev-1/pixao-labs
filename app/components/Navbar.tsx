import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-pixao-blue-900/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* LOGO (Izquierda) */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Aquí iría tu logo SVG, por ahora usamos texto estilizado */}
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-sans tracking-tighter">
            PIXAO <span className="text-pixao-gold">LABS</span>
          </span>
        </Link>

        {/* BOTÓN MENÚ MÓVIL (Solo visible en pantallas pequeñas) */}
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Abrir menú</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        {/* MENÚ DE NAVEGACIÓN (Derecha) */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-pixao-gold rounded md:bg-transparent md:text-pixao-gold md:p-0" aria-current="page">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-pixao-gold md:p-0 transition-colors">Servicios</Link>
            </li>
            <li>
              <Link href="/casos" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-pixao-gold md:p-0 transition-colors">Casos de Éxito</Link>
            </li>
            <li>
              <Link href="/contacto" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-pixao-gold md:p-0 transition-colors">Contacto</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}