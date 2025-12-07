import React from "react";
import {
  FaRocket,
  FaLock,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

export default function Beneficios() {
  return (
    <section className="px-10 py-20 bg-white">

      {/* Título principal */}
      <h3 className="text-4xl font-bold text-center text-blue-700">
        ¿Por qué digitalizar tu negocio con Lizar?
      </h3>
      <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
        Impulsa tu emprendimiento con tecnología moderna, segura y diseñada para crecer contigo.
      </p>

      {/* Beneficios principales */}
      <div className="grid md:grid-cols-3 gap-10 mt-14">
        <div className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:scale-105 transition">
          <FaRocket className="text-blue-600 text-6xl mx-auto" />
          <h4 className="mt-4 text-2xl font-semibold">Más velocidad</h4>
          <p className="mt-3 text-gray-700">
            Acelera tus procesos operativos con sistemas modernos y eficientes.
          </p>
        </div>

        <div className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:scale-105 transition">
          <FaLock className="text-blue-600 text-6xl mx-auto" />
          <h4 className="mt-4 text-2xl font-semibold">Seguridad total</h4>
          <p className="mt-3 text-gray-700">
            Tus datos y los de tus clientes protegidos con buenas prácticas y estándares modernos.
          </p>
        </div>

        <div className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:scale-105 transition">
          <FaChartLine className="text-blue-600 text-6xl mx-auto" />
          <h4 className="mt-4 text-2xl font-semibold">Crecimiento asegurado</h4>
          <p className="mt-3 text-gray-700">
            Aumenta ventas, alcance y control sobre tu negocio con soluciones digitales.
          </p>
        </div>
      </div>

      {/* Nuevos beneficios */}
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        <div className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:scale-105 transition">
          <FaUsers className="text-blue-600 text-6xl mx-auto" />
          <h4 className="mt-4 text-2xl font-semibold">Mejor experiencia del cliente</h4>
          <p className="mt-3 text-gray-700">
            Ofrece a tus clientes rapidez, facilidad y acceso 24/7 a tu negocio.
          </p>
        </div>

        <div className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:scale-105 transition">
          <FaMobileAlt className="text-blue-600 text-6xl mx-auto" />
          <h4 className="mt-4 text-2xl font-semibold">Acceso desde cualquier lugar</h4>
          <p className="mt-3 text-gray-700">
            Tus sistemas disponibles desde computadora o celular, en cualquier momento.
          </p>
        </div>

        <div className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:scale-105 transition">
          <FaTools className="text-blue-600 text-6xl mx-auto" />
          <h4 className="mt-4 text-2xl font-semibold">Soluciones a medida</h4>
          <p className="mt-3 text-gray-700">
            Creamos herramientas personalizadas según el tipo de negocio que tengas.
          </p>
        </div>
      </div>

      {/* Comparativa */}
      <div className="mt-20 bg-blue-50 p-10 rounded-2xl shadow-md">
        <h4 className="text-3xl font-bold text-center text-blue-700">
          Antes vs Después de digitalizarte
        </h4>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h5 className="text-xl font-semibold text-red-600">Antes</h5>
            <ul className="mt-3 text-gray-700 space-y-2">
              <li>❌ Procesos lentos y manuales</li>
              <li>❌ Uso de cuadernos o Excel básico</li>
              <li>❌ Falta de control sobre inventario y ventas</li>
              <li>❌ Limitado alcance de clientes</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h5 className="text-xl font-semibold text-green-600">Después</h5>
            <ul className="mt-3 text-gray-700 space-y-2">
              <li>✅ Sistemas rápidos y automatizados</li>
              <li>✅ Base de datos organizada y segura</li>
              <li>✅ Reportes y estadísticas en tiempo real</li>
              <li>✅ Mayor visibilidad y ventas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h4 className="text-3xl font-bold text-blue-700">¿Listo para modernizar tu negocio?</h4>
        <p className="mt-2 text-gray-600">Da el primer paso y transforma tu emprendimiento con tecnología.</p>

        <a
          href="/contacto"
          className="inline-block mt-6 bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Contáctanos
        </a>
      </div>

    </section>
  );
}
