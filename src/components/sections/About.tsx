export function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            ¿Quiénes somos?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos <strong>estudiantes de la UNAHUR</strong> (Universidad Nacional de Hurlingham) 
                con una misión clara: ayudarte a aprobar tus materias sin vueltas.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Entendemos lo que es estar del otro lado del aula. Sabemos lo que sentís cuando 
                un tema no te entra, cuando el examen está cerca y todavía no entendiste nada.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Por eso, nuestra metodología es simple: <strong>explicaciones claras</strong>, 
                <strong>paciencia</strong> y <strong>acompañamiento real</strong> hasta que 
                vos digas "¡Ya lo entendí!".
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-2">🎓</div>
                    <div className="text-2xl font-bold text-amber-600">UNAHUR</div>
                    <div className="text-sm text-gray-600">Universidad de origen</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-2">💪</div>
                    <div className="text-2xl font-bold text-amber-600">100%</div>
                    <div className="text-sm text-gray-600">Comprometidos</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-2">🤝</div>
                    <div className="text-2xl font-bold text-amber-600">Cercanos</div>
                    <div className="text-sm text-gray-600">Perfil jovem</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-2xl font-bold text-amber-600">Dinámicos</div>
                    <div className="text-sm text-gray-600">Metodología práctica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}