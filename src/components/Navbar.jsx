import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* LOGO */}
      <a href="/">
        <img src="/logo.png" className="h-14 w-auto" />
      </a>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex items-center gap-6">
        <a href="/" className={isActive("/")}>Inicio</a>
        <a href="/nosotros" className={isActive("/nosotros")}>Nosotros</a>
        <a href="/beneficios" className={isActive("/beneficios")}>Beneficios</a>
        <a href="/planes" className={isActive("/planes")}>Planes</a>

        <a
          href="/contacto"
          className={`px-5 py-2 rounded-xl shadow transition
            ${location.pathname === "/contacto" ? "bg-blue-700 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}
          `}
        >
          Contacto
        </a>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* MENU MOBILE */}
      {open && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 md:hidden">

          <a href="/" className={`${isActive("/")} text-lg`} onClick={() => setOpen(false)}>Inicio</a>
          <a href="/nosotros" className={`${isActive("/nosotros")} text-lg`} onClick={() => setOpen(false)}>Nosotros</a>
          <a href="/beneficios" className={`${isActive("/beneficios")} text-lg`} onClick={() => setOpen(false)}>Beneficios</a>
          <a href="/planes" className={`${isActive("/planes")} text-lg`} onClick={() => setOpen(false)}>Planes</a>

          <a
            href="/contacto"
            className={`px-5 py-2 rounded-xl shadow text-lg 
              ${location.pathname === "/contacto" ? "bg-blue-700 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}
            `}
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
