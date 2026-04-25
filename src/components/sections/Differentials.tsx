import { DIFFERENTIALS } from '@/lib/constants';

export function Differentials() {
  return (
    <section id="diferenciales" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nuestro compromiso es tu aprobación. Estos son los pilares de nuestro servicio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((differential, index) => (
            <div
              key={differential.title}
              className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="text-5xl mb-4">{differential.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {differential.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}