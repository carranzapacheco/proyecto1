import React from "react";
import { FaMobileAlt, FaCogs, FaChartLine } from "react-icons/fa";

export default function Servicios() {
  return (
    <section id="servicios" className="px-10 py-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center text-blue-700">Servicios</h3>

      <div className="grid md:grid-cols-3 gap-10 mt-14">
        <div className="p-8 bg-white rounded-2xl shadow-md text-center border hover:shadow-xl transition">
          <FaMobileAlt className="text-blue-600 text-5xl mx-auto" />
          <h4 className="mt-4 text-xl font-semibold">Páginas Web</h4>
          <p className="mt-2 text-gray-700">
            Diseños modernos, rápidos y optimizados para cualquier dispositivo.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md text-center border hover:shadow-xl transition">
          <FaCogs className="text-blue-600 text-5xl mx-auto" />
          <h4 className="mt-4 text-xl font-semibold">Sistemas Web</h4>
          <p className="mt-2 text-gray-700">
            Gestión completa de ventas, clientes, inventario y más.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md text-center border hover:shadow-xl transition">
          <FaChartLine className="text-blue-600 text-5xl mx-auto" />
          <h4 className="mt-4 text-xl font-semibold">Digitalización Total</h4>
          <p className="mt-2 text-gray-700">
            Soluciones integrales para potenciar tu crecimiento digital.
          </p>
        </div>
      </div>
    </section>
  );
}
