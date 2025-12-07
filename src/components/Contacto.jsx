import React from "react";

export default function Contacto() {
  return (
    <section className="px-10 py-20 bg-blue-50 text-center">
      <h3 className="text-4xl font-bold text-blue-700">Contáctanos</h3>
      <p className="mt-4 text-gray-700 text-lg max-w-xl mx-auto">
        Estamos listos para ayudarte a digitalizar tu negocio y llevarlo al siguiente nivel.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">

        {/* WHATSAPP REAL CON MENSAJE */}
        <a
          href="https://wa.me/51914824316?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-green-600 text-white text-xl rounded-xl hover:bg-green-700 transition shadow-lg"
        >
          Enviar WhatsApp
        </a>

        {/* EMAIL REAL CON ASUNTO Y MENSAJE */}
        <a
          href="mailto:carranzapacheco.f.a@gmail.com?subject=Consulta%20sobre%20servicios&body=Hola%2C%20quiero%20información%20sobre%20las%20soluciones%20digitales."
          className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-700 text-xl rounded-xl hover:bg-blue-100 transition shadow-lg"
        >
          Enviar Email
        </a>
      </div>

      <p className="mt-10 text-gray-600 text-lg">
        Respuesta <span className="font-semibold">rápida</span>.
      </p>
    </section>
  );
}
