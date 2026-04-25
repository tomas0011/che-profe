import { BUSINESS_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          ¿Listo para aprobar?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          No esperes más. Coordiná tu primera clase y empezá a mejorar vos también.
          ¡Te esperamos!
        </p>
        <Button
          size="lg"
          onClick={() => window.open(BUSINESS_INFO.whatsappLink, '_blank')}
          className="bg-green-500 hover:bg-green-600 border-none"
        >
          📱 Escribinos por WhatsApp
        </Button>
      </div>
    </section>
  );
}