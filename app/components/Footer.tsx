import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pixao-blue-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Misión */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans tracking-tight">
              PIXAO <span className="text-pixao-gold">LABS</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ingeniería de software estratégica para empresas que buscan escalar. 
              Fusionamos arquitectura robusta con innovación digital.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Explorar</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-pixao-gold transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-pixao-gold transition-colors">Servicios</Link></li>
              <li><Link href="/casos" className="hover:text-pixao-gold transition-colors">Casos de Éxito</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legal / Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/contacto" className="hover:text-pixao-gold transition-colors">Agendar Consultoría</Link></li>
              <li><a href="mailto:niocortazar25aldemar@gmail.com" className="hover:text-pixao-gold transition-colors">niocortazar25aldemar@gmail.com</a></li>
              <li className="pt-4 text-xs text-gray-600">
                Tolima, Colombia <br/>
                Operación Remota Global
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior: Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Pixao Labs. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Diseñado con Next.js & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
}