import { MODALITIES } from '@/lib/constants';

export function Modality() {
  return (
    <section id="modalidad" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Modalidad de Clases
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Elegí la modalidad que mejor se adapte a vos. Estamos para facilitarte el aprendizaje.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {MODALITIES.map((modality) => (
            <div
              key={modality.type}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-6xl mb-6">{modality.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {modality.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {modality.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-100 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700">
            <strong className="text-amber-700">¿No sabés cuál elegir?</strong>
            <br />
            Escribinos y te asesoramos sobre qué modalidad te conviene según tu situación.
          </p>
        </div>
      </div>
    </section>
  );
}