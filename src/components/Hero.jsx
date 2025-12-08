import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Palette, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rapidez",
    description:
      "Desarrollamos tus proyectos en tiempos optimizados sin comprometer la calidad.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Protegemos tus datos con estándares de seguridad internacionales y certificaciones.",
  },
  {
    icon: Palette,
    title: "Diseño profesional",
    description:
      "Interfaces modernas y atractivas que reflejan la identidad de tu marca.",
  },
  {
    icon: Headphones,
    title: "Soporte personalizado",
    description:
      "Acompañamiento continuo durante y después del desarrollo de tu proyecto.",
  },
];

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

      {/* ============ BENEFICIOS ============ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
