import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaBolt, FaCrown } from "react-icons/fa";

export default function Planes() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 min-h-screen">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
          Planes y Precios
        </h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Elige el plan que mejor se adapte al crecimiento de tu negocio.
        </p>
      </motion.div>

      {/* Contenedor de planes */}
      <div className="grid gap-10 mt-16 md:grid-cols-3">

        {/* PLAN BÁSICO */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white p-10 rounded-2xl shadow-lg border flex flex-col"
        >
          <FaCheckCircle className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            Plan Básico
          </h3>
          <p className="text-center text-gray-700 mt-2">
            Ideal para pequeños negocios o nuevos emprendimientos.
          </p>

          <h4 className="text-center text-4xl font-bold text-blue-700 mt-6">
            S/ 299
          </h4>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Página web de 1 sección</li>
            <li>✔ Diseño responsivo</li>
            <li>✔ Integración a WhatsApp</li>
            <li>✔ Hosting + dominio (opcional)</li>
          </ul>

          <a
            href="/contacto"
            className="mt-auto bg-blue-600 text-white w-full text-center py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Elegir Plan
          </a>
        </motion.div>

        {/* PLAN PROFESIONAL */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 text-white p-10 rounded-2xl shadow-xl border-2 border-blue-700 flex flex-col transform md:-translate-y-6"
        >
          <FaBolt className="text-white text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center">
            Plan Profesional
          </h3>
          <p className="text-center mt-2 opacity-90">
            Perfecto para negocios en crecimiento.
          </p>

          <h4 className="text-center text-4xl font-bold mt-6">
            S/ 699
          </h4>

          <ul className="mt-6 space-y-3 opacity-95">
            <li>✔ Página web de hasta 5 secciones</li>
            <li>✔ Panel de administración básico</li>
            <li>✔ Optimización SEO inicial</li>
            <li>✔ Certificado SSL + Hosting</li>
            <li>✔ 1 mes de soporte</li>
          </ul>

          <a
            href="/contacto"
            className="mt-auto bg-white text-blue-700 w-full text-center py-3 rounded-xl hover:bg-gray-200 transition font-semibold"
          >
            Elegir Plan
          </a>
        </motion.div>

        {/* PLAN EMPRESARIAL */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white p-10 rounded-2xl shadow-lg border flex flex-col"
        >
          <FaCrown className="text-yellow-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            Plan Empresarial
          </h3>
          <p className="text-center text-gray-700 mt-2">
            La solución más completa para empresas.
          </p>

          <h4 className="text-center text-4xl font-bold text-yellow-600 mt-6">
            S/ 1299
          </h4>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Sistema web personalizado</li>
            <li>✔ Base de datos (MySQL o PostgreSQL)</li>
            <li>✔ Dashboard profesional</li>
            <li>✔ Integraciones avanzadas</li>
            <li>✔ 3 meses de soporte</li>
          </ul>

          <a
            href="/contacto"
            className="mt-auto bg-blue-600 text-white w-full text-center py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Elegir Plan
          </a>
        </motion.div>

      </div>
    </section>
  );
}
