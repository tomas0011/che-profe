import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-500">Che</span> Profe
            </h3>
            <p className="text-gray-400">
              Clases particulares y mentorías que te hacen aprobar. Sin vueltas.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📍 Ubicación</h4>
            <p className="text-gray-400">
              {BUSINESS_INFO.location}
            </p>
            <p className="text-gray-400 mt-2">
              Modalidad virtual disponible en todo el país
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📱 Contacto</h4>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-gray-400 hover:text-amber-500 transition-colors block"
            >
              {BUSINESS_INFO.formattedPhone}
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors block mt-2"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Che Profe. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Hecho con ❤️ por estudiantes de la UNAHUR
          </p>
        </div>
      </div>
    </footer>
  );
}