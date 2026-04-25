import { SERVICES } from '@/lib/constants';

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Niveles y Materias
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Encontrá la help que necesitás. Ofrecemos clases para todos los niveles 
          con las materias que más complejidad presentan.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.level}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 text-center">
                {service.level === 'primario' && '📚'}
                {service.level === 'secundario' && '🧑‍🎓'}
                {service.level === 'universitario' && '🎓'}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.subjects.map((subject) => (
                  <li
                    key={subject}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}