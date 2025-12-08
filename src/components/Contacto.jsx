import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Contacto() {
  return (
    <section className="px-10 py-24 bg-blue-50 text-center">
      <motion.h3
        className="text-5xl font-extrabold text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctanos
      </motion.h3>

      <motion.p
        className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Estamos listos para ayudarte a crear una presencia digital profesional,
        aumentar la visibilidad de tu negocio y desarrollar una página web
        moderna, optimizada y enfocada en resultados.
      </motion.p>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
        {/* WHATSAPP */}
        <motion.a
          href="https://wa.me/51914824316?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-10 py-4 bg-green-600 text-white text-xl rounded-2xl hover:bg-green-700 transition shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <MessageCircle size={26} />
          WhatsApp
        </motion.a>

        {/* EMAIL */}
        <motion.a
          href="mailto:carranzapacheco.f.a@gmail.com?subject=Consulta%20sobre%20servicios&body=Hola%2C%20quiero%20información%20sobre%20las%20soluciones%20digitales."
          className="flex items-center gap-3 px-10 py-4 bg-white border-2 border-blue-600 text-blue-700 text-xl rounded-2xl hover:bg-blue-100 transition shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <Mail size={26} />
          Enviar email
        </motion.a>
      </div>

      <motion.div
        className="mt-14 text-gray-600 text-lg max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          Nuestro equipo responde en menos de <span className="font-semibold text-blue-700">30 minutos</span>.
        </p>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Phone size={32} className="mx-auto text-blue-600" />
          <h4 className="mt-4 text-xl font-semibold text-gray-800">Atención directa</h4>
          <p className="mt-2 text-gray-600">Resolvemos todas tus dudas y te guiamos paso a paso.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Mail size={32} className="mx-auto text-blue-600" />
          <h4 className="mt-4 text-xl font-semibold text-gray-800">Soporte 24/7</h4>
          <p className="mt-2 text-gray-600">Siempre disponibles para apoyarte con tu proyecto web.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <MessageCircle size={32} className="mx-auto text-blue-600" />
          <h4 className="mt-4 text-xl font-semibold text-gray-800">Asesoría personalizada</h4>
          <p className="mt-2 text-gray-600">Te ayudamos a elegir la solución perfecta para tu negocio.</p>
        </div>
      </div>
    </section>
  );
}