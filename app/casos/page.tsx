import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito | Pixao Labs",
  description: "Proyectos reales donde hemos transformado deuda técnica en ventaja competitiva.",
};

export default function CasosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pixao-blue-900 pt-32 pb-20 px-4">
      
      {/* --- ENCABEZADO --- */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
          Resultados que <br />
          <span className="text-pixao-gold">Hablan por Sí Solos</span>
        </h1>
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          Debido a estrictos acuerdos de confidencialidad (NDA), no publicamos los nombres de todos nuestros clientes. 
          Aquí presentamos una selección de los desafíos técnicos que hemos resuelto.
        </p>
      </div>

      {/* --- CASOS DE ESTUDIO --- */}
      <div className="max-w-6xl mx-auto space-y-24">

        {/* CASO 1: AGROTECH (Tu conexión con el campo) */}
        <section className="flex flex-col md:flex-row gap-12 border-b border-white/5 pb-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 text-xs font-bold text-pixao-gold border border-pixao-gold/30 rounded-full uppercase tracking-wider">
              AgroTech & IoT
            </div>
            <h2 className="text-3xl font-bold text-white">Digitalización de Cultivos de Exportación</h2>
            <p className="text-gray-400 leading-relaxed">
              <strong>El Cliente:</strong> Una productora de café especial con más de 30.000 árboles y certificación internacional.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong>El Desafío:</strong> La trazabilidad se hacía en papel, provocando pérdidas de información sobre fertilización y cosecha, poniendo en riesgo la certificación de calidad.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>La Solución Pixao:</strong> Diseñamos una arquitectura "Offline-First". Una aplicación progresiva (PWA) que permite a los recolectores registrar datos en zonas sin internet, sincronizando automáticamente con la nube central cuando hay conexión.
            </p>
          </div>
          <div className="md:w-1/2 bg-pixao-blue-800/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
            <h3 className="text-xl text-white font-bold mb-6 border-l-4 border-pixao-gold pl-4">Impacto Generado</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2">
                <span>Tiempo de reporte</span>
                <span className="text-pixao-gold font-bold text-xl">-70%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2">
                <span>Pérdida de datos</span>
                <span className="text-pixao-gold font-bold text-xl">0%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 pt-2">
                <span>Certificación</span>
                <span className="text-green-400 font-bold">Retenida Exitósamente</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CASO 2: FINTECH / LEGACY (Tu fuerza en Java/Backend) */}
        <section className="flex flex-col md:flex-row-reverse gap-12 border-b border-white/5 pb-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 text-xs font-bold text-cyan-400 border border-cyan-400/30 rounded-full uppercase tracking-wider">
              Fintech & Modernización
            </div>
            <h2 className="text-3xl font-bold text-white">Rescate de Core Transaccional</h2>
            <p className="text-gray-400 leading-relaxed">
              <strong>El Cliente:</strong> Plataforma de servicios financieros procesando miles de transacciones diarias.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong>El Desafío:</strong> Un sistema monolítico legado (Legacy) que sufría caídas constantes durante los picos de pago, generando pérdida de confianza y dinero.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>La Solución Pixao:</strong> Auditoría de arquitectura y migración gradual a microservicios. Implementamos patrones de resiliencia (Circuit Breakers) y optimizamos consultas complejas a base de datos que consumían el 80% del CPU.
            </p>
          </div>
          <div className="md:w-1/2 bg-pixao-blue-800/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
            <h3 className="text-xl text-white font-bold mb-6 border-l-4 border-cyan-400 pl-4">Impacto Generado</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2">
                <span>Uptime (Disponibilidad)</span>
                <span className="text-cyan-400 font-bold text-xl">99.99%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2">
                <span>Costos de Servidor</span>
                <span className="text-cyan-400 font-bold text-xl">-40%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 pt-2">
                <span>Velocidad de Respuesta</span>
                <span className="text-white font-bold">120ms (antes 2s)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CASO 3: SAAS (Tu lado emprendedor/SaaS) */}
        <section className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 text-xs font-bold text-purple-400 border border-purple-400/30 rounded-full uppercase tracking-wider">
              SaaS & Escalabilidad
            </div>
            <h2 className="text-3xl font-bold text-white">Plataforma de Gestión para Pymes</h2>
            <p className="text-gray-400 leading-relaxed">
              <strong>El Cliente:</strong> Startup SaaS enfocada en el sector de servicios y belleza.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong>El Desafío:</strong> El MVP inicial no escalaba. La interfaz era lenta y los usuarios abandonaban la plataforma por la mala experiencia de usuario (UX).
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>La Solución Pixao:</strong> Reingeniería del Frontend. Creamos una interfaz moderna, rápida y reactiva. Implementamos un sistema de diseño escalable que permitió lanzar nuevas funcionalidades en días, no meses.
            </p>
          </div>
          <div className="md:w-1/2 bg-pixao-blue-800/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
            <h3 className="text-xl text-white font-bold mb-6 border-l-4 border-purple-400 pl-4">Impacto Generado</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2">
                <span>Retención de Usuarios</span>
                <span className="text-purple-400 font-bold text-xl">+65%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-2">
                <span>Velocidad de Carga</span>
                <span className="text-purple-400 font-bold text-xl">0.8s</span>
              </li>
              <li className="flex justify-between items-center text-gray-300 pt-2">
                <span>Time-to-Market</span>
                <span className="text-white font-bold">2x más rápido</span>
              </li>
            </ul>
          </div>
        </section>

      </div>

      {/* --- CTA FINAL --- */}
      <div className="mt-24 bg-gradient-to-r from-pixao-gold/20 to-pixao-blue-900 rounded-3xl p-12 text-center border border-pixao-gold/30">
        <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">¿Tu empresa tiene un desafío similar?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          No importa si estás en el campo, en la banca o lanzando una startup. La buena ingeniería resuelve problemas universales.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block px-10 py-4 bg-pixao-gold text-pixao-blue-900 font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-lg"
        >
          Discutir mi Proyecto
        </Link>
      </div>

    </main>
  );
}