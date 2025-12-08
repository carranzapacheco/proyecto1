import React from "react";

const steps = [
  { number: "1", title: "Reunión inicial", description: "Conocemos tu negocio, objetivos y necesidades específicas del proyecto." },
  { number: "2", title: "Análisis del proyecto", description: "Evaluamos la viabilidad, tecnología necesaria y timeline de desarrollo." },
  { number: "3", title: "Diseño", description: "Creamos prototipos y diseños visuales para tu aprobación." },
  { number: "4", title: "Desarrollo", description: "Construimos tu solución con código limpio y buenas prácticas." },
  { number: "5", title: "Pruebas", description: "Realizamos testing exhaustivo para garantizar calidad y seguridad." },
  { number: "6", title: "Entrega y Soporte", description: "Lanzamos tu proyecto y ofrecemos soporte continuo post-desarrollo." },
];

export default function Nosotros() {
  return (
    <>
      {/* --- SOBRE NOSOTROS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Bloque decorativo con foto */}
            <div className="aspect-square rounded-2xl relative overflow-hidden">

                {/* Imagen */}
                <img
                src="/logo2.png"
                alt="Sobre nosotros"
                className="absolute inset-0 w-full h-full object-contain"
                />
            </div>

            {/* Texto */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-blue-600">Sobre nosotros</h2>

              <p className="text-lg text-muted-foreground">
                Lizar es una empresa dedicada a crear soluciones digitales innovadoras. Somos un dúo
                apasionados por la tecnología, comprometidos con entregar proyectos de calidad que transforman negocios.
              </p>

              <div className="space-y-4">

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Misión</h3>
                  <p className="text-muted-foreground">
                    Proporcionar soluciones digitales accesibles y de alto impacto que impulsen el crecimiento de las empresas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Visión</h3>
                  <p className="text-muted-foreground">
                    Ser el socio digital de confianza para empresas que buscan innovación y excelencia tecnológica, aportando
                    soluciones que impulsen su crecimiento, optimicen sus procesos y generen verdadero valor.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Valores</h3>
                  <p className="text-muted-foreground">
                    Honestidad, innovación, compromiso con la calidad y excelencia en el servicio al cliente, pilares que guían cada una de nuestras decisiones y acciones.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESO DE TRABAJO --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Un flujo probado que garantiza resultados excepcionales.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
