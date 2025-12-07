import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* ============ HERO ============ */}
      <header className="flex flex-col md:flex-row items-center justify-between px-10 py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-blue-800 leading-tight drop-shadow-md">
            Impulsa tu negocio con soluciones digitales modernas
          </h2>

          <p className="mt-5 text-xl text-gray-700">
            En Lizar te ayudamos a transformar tu emprendimiento con páginas web rápidas,
            sistemas eficientes y herramientas diseñadas a tu medida.
          </p>

          <ul className="mt-6 text-gray-800 space-y-2 text-lg">
            <li>🚀 Mejora tus procesos y ahorra tiempo</li>
            <li>📊 Control total de tu negocio en un solo sistema</li>
            <li>🌐 Mayor presencia online y más clientes</li>
          </ul>

          <div className="flex gap-4 mt-10">
            <a
              href="#servicios"
              className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition shadow-md"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
          alt="Tech Illustration"
          className="mt-12 md:mt-0 w-full max-w-lg rounded-xl shadow-xl"
        />
      </header>

      {/* ============ SOBRE MÍ ============ */}
      <section id="sobre-mi" className="px-10 py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-4xl font-bold text-blue-700">Sobre mí</h3>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones digitales que realmente
            ayuden a emprendedores y negocios a crecer. Me especializo en construir páginas
            web rápidas, sistemas automatizados y herramientas modernas que potencian tu
            productividad.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Mi enfoque es ofrecer soluciones claras, eficientes y totalmente personalizadas,
            asegurando que cada cliente obtenga resultados reales y medibles.
          </p>
        </motion.div>
      </section>
    </>
  );
}
