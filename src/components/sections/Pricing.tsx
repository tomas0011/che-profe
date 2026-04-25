import { PRICES, CURRENCY_FORMAT } from '@/lib/constants';

export function Pricing() {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Nuestros Precios
        </h2>
        <p className="text-lg text-gray-600 text-center mb-4 max-w-2xl mx-auto">
          Inversión clara y transparente. Sin letras chiquitas.
        </p>
        <p className="text-sm text-gray-500 text-center mb-12">
          *Los precios pueden variar según disponibilidad
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {PRICES.map((price, index) => (
            <div
              key={price.level}
              className={`bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                index === 1 ? 'ring-2 ring-amber-500 scale-105' : ''
              }`}
            >
              {index === 1 && (
                <div className="bg-amber-500 text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-4 -mt-4 mx-auto w-fit">
                  Más Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {price.title}
              </h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-amber-600">
                  {CURRENCY_FORMAT.format(price.price)}
                </span>
              </div>
              <p className="text-center text-gray-600 text-sm mb-6">
                {price.note}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Clases personalizadas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Material de apoyo incluido
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Modalidad a elección
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Horarios flexibles
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}