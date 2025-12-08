import React from "react";
import { Code, Cog, Globe } from "lucide-react";

const services = [
  {
    category: "Desarrollo Web",
    icon: Globe,
    items: [
      { name: "Páginas estáticas", desc: "Sitios informativos de impacto con carga rápida." },
      { name: "Páginas empresariales", desc: "Soluciones completas para tu negocio online." },
      { name: "Portafolios", desc: "Muestra tus trabajos de forma profesional." },
    ],
  },
  {
    category: "Desarrollo de Software",
    icon: Code,
    items: [
      { name: "Sistemas a medida", desc: "Soluciones adaptadas a tus necesidades específicas." },
      { name: "Sistemas administrativos", desc: "Gestión eficiente de tu negocio." },
      { name: "Aplicaciones Web Avanzadas", desc: "Plataformas escalables y robustas." },
    ],
  },
  {
    category: "Servicios Adicionales",
    icon: Cog,
    items: [
      { name: "Mantenimiento Web", desc: "Actualizaciones y soporte técnico continuo." },
      { name: "Integración con APIs", desc: "Conecta tus sistemas con otras plataformas." },
      { name: "Hosting y Dominio", desc: "Infraestructura confiable para tu presencia digital." },
    ],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">Nuestros Servicios</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Ofrecemos soluciones digitales completas diseñadas para transformar tu visión en realidad,
          combinando estrategia, diseño y tecnología para crear experiencias funcionales, atractivas y orientadas al crecimiento.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.category}
                className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-6">{service.category}</h3>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item.name} className="pb-4 border-b border-border last:border-0">
                      <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}