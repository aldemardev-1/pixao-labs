import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-pixao-blue-900">
      
      {/* --- HERO SECTION (Portada) --- */}
      {/* Usamos un fondo con gradiente sutil para darle profundidad */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
        
        {/* Efecto de "Grid" tecnológico en el fondo (CSS puro con Tailwind) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(to right, #3B82F6 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' // Desvanece el grid hacia abajo
             }}>
        </div>

        {/* Contenido Principal */}
        <div className="z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-pixao-gold uppercase bg-pixao-gold/10 rounded-full border border-pixao-gold/20">
            Consultoría de Software Enterprise
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white font-sans tracking-tight leading-tight">
            Ingeniería con <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixao-gold to-yellow-200">
              Carácter y Estrategia
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Transformamos negocios tradicionales en potencias digitales mediante arquitecturas sólidas, Java Enterprise y diseño moderno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contacto" className="px-8 py-4 bg-pixao-gold text-pixao-blue-900 font-bold rounded hover:bg-white transition-colors">
              Agendar Consultoría
            </Link>
            <Link href="/casos" className="px-8 py-4 border border-gray-600 text-white rounded hover:border-pixao-gold hover:text-pixao-gold transition-colors">
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE SERVICIOS (Cards) --- */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Arquitectura */}
          <div className="p-8 rounded-2xl bg-pixao-blue-800 border border-white/5 hover:border-pixao-gold/50 transition-all group">
            <div className="w-12 h-12 bg-pixao-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pixao-gold transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-sans">Arquitectura Escalable</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Diseño de sistemas robustos (Clean Architecture, Hexagonal) preparados para soportar miles de usuarios sin colapsar.
            </p>
          </div>

          {/* Tarjeta 2: Modernización */}
          <div className="p-8 rounded-2xl bg-pixao-blue-800 border border-white/5 hover:border-pixao-gold/50 transition-all group">
            <div className="w-12 h-12 bg-pixao-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pixao-gold transition-colors">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-sans">Modernización Legacy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Migración de sistemas antiguos (Monolitos, Java viejo) a microservicios modernos en la nube, sin detener tu operación.
            </p>
          </div>

          {/* Tarjeta 3: Desarrollo Ágil */}
          <div className="p-8 rounded-2xl bg-pixao-blue-800 border border-white/5 hover:border-pixao-gold/50 transition-all group">
            <div className="w-12 h-12 bg-pixao-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pixao-gold transition-colors">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-sans">Desarrollo Full Stack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interfaces rápidas (React/Next.js) conectadas a Backends potentes. Velocidad para el usuario, control para el negocio.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}