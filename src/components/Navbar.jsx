import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* LOGO con animación */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.png"   // Cambia la ruta según tu archivo
          alt="Lizar Logo"
          className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-110"
        />
      </a>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex items-center gap-6">
        <a href="/" className="text-gray-700 hover:text-blue-600 transition">Inicio</a>
        <a href="/nosotros" className="text-gray-700 hover:text-blue-600 transition">Nosotros</a>
        <a href="/beneficios" className="text-gray-700 hover:text-blue-600 transition">Beneficios</a>
        <a href="/planes" className="text-gray-700 hover:text-blue-600 transition">Planes</a>

        <a
          href="/contacto"
          className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow"
        >
          Contacto
        </a>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button
        className="md:hidden text-2xl text-gray-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* MENU MOBILE */}
      {open && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 md:hidden">

          <a href="/" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setOpen(false)}>
            Inicio
          </a>

          <a href="/beneficios" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setOpen(false)}>
            Beneficios
          </a>

          <a href="/planes" className="text-gray-700 hover:text-blue-600 text-lg" onClick={() => setOpen(false)}>
            Planes
          </a>

          <a
            href="/contacto"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow text-lg"
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
