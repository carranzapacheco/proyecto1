import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Footer from "../components/Footer";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Footer />
    </>
  );
}
