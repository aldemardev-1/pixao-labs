import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Pixao Labs",
  description: "Agenda una sesión de consultoría estratégica con nuestro equipo de ingeniería.",
};

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pixao-blue-900 pt-32 pb-20 px-4">
      
      {/* --- ENCABEZADO --- */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
          Inicia tu <br />
          <span className="text-pixao-gold">Transformación Digital</span>
        </h1>
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          ¿Listo para escalar? Cuéntanos sobre tu desafío técnico y recibe una hoja de ruta preliminar en menos de 24 horas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-pixao-blue-800/20 p-8 md:p-12 rounded-3xl border border-white/5">
        
        {/* COLUMNA IZQUIERDA: Información Directa */}
        <div className="space-y-12">
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Hablemos Directamente</h3>
            <p className="text-gray-400 mb-8">
              Preferimos la calidad sobre la cantidad. Aceptamos un número limitado de proyectos al año para garantizar atención exclusiva.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pixao-blue-800 rounded-lg flex items-center justify-center text-pixao-gold border border-white/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Email Corporativo</h4>
                <a 
                    href="mailto:niocortazar25aldemar@gmail.com" 
                    className="text-gray-400 hover:text-pixao-gold transition-colors"
                >niocortazar25aldemar@gmail.com
                </a>
                <p className="text-xs text-gray-500 mt-1">Respuesta en max. 24h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pixao-blue-800 rounded-lg flex items-center justify-center text-pixao-gold border border-white/5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Base de Operaciones</h4>
                <p className="text-gray-400">Tolima, Colombia</p>
                <p className="text-xs text-gray-500 mt-1">Disponible para viajes on-site bajo demanda.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Tecnologías Core</p>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Aquí podrías poner logos SVG de Java, React, AWS, etc. Por ahora texto estilizado */}
               <span className="font-bold text-white">JAVA</span>
               <span className="font-bold text-white">SPRING</span>
               <span className="font-bold text-white">NEXT.JS</span>
               <span className="font-bold text-white">ORACLE</span>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: Formulario */}
        {/* COLUMNA DERECHA: Formulario */}
        <div className="bg-pixao-blue-900/50 p-8 rounded-2xl border border-white/5 shadow-2xl">
        <form action="https://formspree.io/f/mdalzzoz" method="POST" className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium text-gray-300">Nombre Completo</label>
                <input 
                type="text" 
                id="nombre"
                name="nombre" 
                className="w-full bg-pixao-blue-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pixao-gold focus:ring-1 focus:ring-pixao-gold transition-colors"
                placeholder="Tu nombre"
                required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="empresa" className="text-sm font-medium text-gray-300">Empresa (Opcional)</label>
                <input 
                type="text" 
                id="empresa"
                name="empresa" 
                className="w-full bg-pixao-blue-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pixao-gold focus:ring-1 focus:ring-pixao-gold transition-colors"
                placeholder="Nombre de tu organización"
                />
            </div>
            </div>

            <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo Electrónico</label>
            <input 
                type="email" 
                id="email"
                name="email" 
                className="w-full bg-pixao-blue-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pixao-gold focus:ring-1 focus:ring-pixao-gold transition-colors"
                placeholder="nombre@empresa.com"
                required
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="tipo" className="text-sm font-medium text-gray-300">Tipo de Proyecto</label>
            <select 
                id="tipo"
                name="tipo" 
                className="w-full bg-pixao-blue-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-pixao-gold focus:ring-1 focus:ring-pixao-gold transition-colors"
            >
                <option value="Modernización Legacy">Modernización de Sistemas (Legacy)</option>
                <option value="Producto Digital">Desarrollo de Producto Digital</option>
                <option value="Consultoría Arquitectura">Consultoría de Arquitectura</option>
                <option value="Auditoría Técnica">Auditoría Técnica</option>
                <option value="Otro">Otro</option>
            </select>
            </div>

            <div className="space-y-2">
            <label htmlFor="mensaje" className="text-sm font-medium text-gray-300">Detalles del Desafío</label>
            <textarea 
                id="mensaje"
                name="mensaje" 
                rows={4}
                className="w-full bg-pixao-blue-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pixao-gold focus:ring-1 focus:ring-pixao-gold transition-colors resize-none"
                placeholder="Cuéntanos brevemente qué problema necesitas resolver..."
                required
            ></textarea>
            </div>

            <button 
            type="submit" 
            className="w-full bg-pixao-gold text-pixao-blue-900 font-bold py-4 rounded-lg hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-pixao-gold/20 uppercase tracking-widest text-sm"
            >
            Enviar Solicitud
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
            Tus datos están protegidos bajo estricto NDA. No compartimos información con terceros.
            </p>

        </form>
        </div>

      </div>
    </main>
  );
}