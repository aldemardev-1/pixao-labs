import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Consultoría | Pixao Labs",
  description: "Ingeniería de software de alto nivel. Soluciones tecnológicas agnósticas enfocadas en escalabilidad, seguridad y eficiencia operativa.",
};

export default function ServiciosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pixao-blue-900 pt-32 pb-20 px-4">
      
      {/* --- ENCABEZADO: Enfoque en Valor, no en Código --- */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
          Ingeniería Sin Límites, <br />
          <span className="text-pixao-gold">Resultados Sin Excusas</span>
        </h1>
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          No nos casamos con tecnologías. Analizamos tu problema y construimos la solución perfecta utilizando las herramientas adecuadas para tu negocio. 
          <span className="block mt-2 font-medium text-white">Calidad obsesiva. Arquitectura sólida. Futuro asegurado.</span>
        </p>
      </div>

      {/* --- LISTA ESTRATÉGICA DE SERVICIOS --- */}
      <div className="max-w-6xl mx-auto space-y-16">

        {/* SERVICIO 1: Arquitectura & Backend (Agnóstico) */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-pixao-blue-800/30 p-8 rounded-3xl border border-white/5 hover:border-pixao-gold/30 transition-all group">
          <div className="order-2 md:order-1">
            <div className="w-16 h-16 bg-pixao-blue-900 rounded-2xl flex items-center justify-center mb-6 border border-pixao-gold/20 group-hover:scale-110 transition-transform">
              {/* Icono de Estructura/Cimientos */}
              <svg className="w-8 h-8 text-pixao-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ingeniería de Backend & Sistemas Críticos</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Diseñamos el motor de tu negocio para que nunca falle. Ya sea que necesites procesar millones de transacciones o integrar sistemas complejos, creamos arquitecturas que soportan la carga real.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Arquitectura Limpia y Modular:</strong> Código ordenado que cualquier equipo puede mantener y escalar en el futuro.</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Optimización de Rendimiento:</strong> Hacemos que tus bases de datos y APIs vuelen, reduciendo costos de servidores.</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Seguridad desde el Diseño:</strong> Protección de datos y estándares bancarios desde la primera línea de código.</span>
              </li>
            </ul>
          </div>
          {/* Visual Abstracto */}
          <div className="order-1 md:order-2 h-64 bg-gradient-to-tr from-pixao-blue-900 to-pixao-blue-800 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
            <span className="text-5xl md:text-6xl font-bold text-white/5 tracking-widest">CORE</span>
          </div>
        </section>

        {/* SERVICIO 2: Desarrollo de Producto (Frontend/Móvil) */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-pixao-blue-800/30 p-8 rounded-3xl border border-white/5 hover:border-pixao-gold/30 transition-all group">
          <div className="h-64 bg-gradient-to-tl from-pixao-blue-900 to-pixao-blue-800 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
             <span className="text-5xl md:text-6xl font-bold text-white/5 tracking-widest">DIGITAL</span>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-pixao-blue-900 rounded-2xl flex items-center justify-center mb-6 border border-pixao-gold/20 group-hover:scale-110 transition-transform">
              {/* Icono de Interfaz/Pantalla */}
              <svg className="w-8 h-8 text-pixao-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Experiencias Digitales de Alto Impacto</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              No hacemos "páginas web", construimos plataformas digitales. Nos enfocamos en la usabilidad, la velocidad y en crear interfaces que tus usuarios amen usar, en cualquier dispositivo.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Desarrollo Multiplataforma:</strong> Web, Móvil o PWA. Elegimos la tecnología que mejor se adapte a tu audiencia.</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Dashboards Operativos:</strong> Paneles de control intuitivos para visualizar la data de tu negocio en tiempo real.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SERVICIO 3: Transformación & Rescate */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-pixao-blue-800/30 p-8 rounded-3xl border border-white/5 hover:border-pixao-gold/30 transition-all group">
          <div className="order-2 md:order-1">
            <div className="w-16 h-16 bg-pixao-blue-900 rounded-2xl flex items-center justify-center mb-6 border border-pixao-gold/20 group-hover:scale-110 transition-transform">
              {/* Icono de Estrategia/Ajedrez */}
              <svg className="w-8 h-8 text-pixao-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Auditoría y Modernización Tecnológica</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              ¿Tienes un sistema heredado que frena tu crecimiento? ¿Tu software actual es lento o inseguro? Entramos a revisar, diagnosticar y arreglar.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Rescate de Proyectos:</strong> Tomamos código problemático, lo estabilizamos y lo llevamos a estándares de calidad modernos.</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-pixao-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Consultoría de CTO:</strong> Te ayudamos a tomar decisiones técnicas difíciles (nube vs on-premise, selección de proveedores, hiring).</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 h-64 bg-gradient-to-tr from-pixao-blue-900 to-pixao-blue-800 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
            <span className="text-5xl md:text-6xl font-bold text-white/5 tracking-widest">AUDIT</span>
          </div>
        </section>

      </div>

      {/* --- CTA FINAL --- */}
      <div className="mt-24 text-center pb-10">
        <h3 className="text-2xl text-white font-bold mb-6">¿Listo para construir software de verdad?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Déjanos entender tu negocio primero. La tecnología vendrá después.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block px-10 py-4 bg-pixao-gold text-pixao-blue-900 font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-lg shadow-pixao-gold/20"
        >
          Agendar Diagnóstico Gratuito
        </Link>
      </div>

    </main>
  );
}