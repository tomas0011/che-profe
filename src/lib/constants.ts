import {
  ContactInfo,
  Differential,
  ModalityOption,
  Price,
  Service,
  Testimonial,
} from '@/types';

export const BUSINESS_INFO = {
  name: 'Che Profe',
  tagline: 'Clases que te hacen aprobar, sin vueltas',
  phone: '+5491124731603',
  formattedPhone: '+54 9 11 2473-1603',
  location: 'Zona Oeste, Buenos Aires',
  whatsappLink: 'https://wa.me/5491124731603?text=Hola%2C%20quiero%20coordinar%20una%20clase',
  defaultWhatsappMessage: 'Hola, quiero coordinar una clase',
};

export const SERVICES: Service[] = [
  {
    level: 'primario',
    title: 'Primario',
    subjects: [
      'Matemática',
      'Lengua',
      'Ciencias Naturales',
      'Ciencias Sociales',
      'Inglés',
    ],
  },
  {
    level: 'secundario',
    title: 'Secundario',
    subjects: [
      'Matemática',
      'Física',
      'Química',
      'Lengua y Literatura',
      'Inglés',
      'Historia',
      'Geografía',
      'Biología',
    ],
  },
  {
    level: 'universitario',
    title: 'Universitario',
    subjects: [
      'Ing. Metalúrgica',
      'Ing. Eléctrica',
      'Ing. Informática',
      'Profesorado de Lengua y Literatura',
      'Profesorado de Inglés',
      'Profesorado de Matemática',
      'Análisis Matemático',
      'Álgebra',
      'Física General',
    ],
  },
];

export const PRICES: Price[] = [
  {
    level: 'primario',
    title: 'Primario',
    price: 15000,
    note: 'Por bloque de 2 horas',
  },
  {
    level: 'secundario',
    title: 'Secundario',
    price: 20000,
    note: 'Por bloque de 2 horas',
  },
  {
    level: 'universitario',
    title: 'Universitario',
    price: 25000,
    note: 'Por bloque de 2 horas',
  },
];

export const MODALITIES: ModalityOption[] = [
  {
    type: 'presencial',
    title: 'Presencial',
    description: 'En Zona Oeste, Buenos Aires. Coordinamos el lugar según tu comodidad.',
    icon: '📍',
  },
  {
    type: 'virtual',
    title: 'Virtual',
    description: 'Clases por videollamada. Igual de efectivas y personalizadas.',
    icon: '💻',
  },
  {
    type: 'acoordinar',
    title: 'A Coordinar',
    description: '¿Necesitás otro formato? Escribinos y lo arreglamos.',
    icon: '📅',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Explicaciones Claras',
    description: 'Te explicamos de forma simple y directa. Sin vueltas, sin术语 complicate.',
    icon: '🎯',
  },
  {
    title: 'Acompañamiento Personalizado',
    description: 'Cada alumno es único. Nos adaptamos a tu ritmo y necesidades.',
    icon: '🤝',
  },
  {
    title: 'Preparación para Exámenes',
    description: 'Te preparamos para parciales, finales y evaluaciones.',
    icon: '📝',
  },
  {
    title: 'Horarios Flexibles',
    description: 'Coordinamos los horarios que te convengan. Estamos disponibles.',
    icon: '⏰',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Martina González',
    level: 'Secundario - 5° año',
    text: 'Gracias a Che Profe pude aprobar matemática que me tenía complicada. Los profes explican re bien y siempre tienen paciencia. Totalmente recomendado!',
  },
  {
    name: 'Lucas Pérez',
    level: 'Universitario - Ing. Informática',
    text: 'Las clases de programación y análisis matemático fueron clave para mis parciales. Son muy cercanos y se preocupan de verdad por que entiendas.',
  },
  {
    name: 'Sofia Altamirano',
    level: 'Primario - 6° grado',
    text: 'Mi hijo mejoró mucho en el colegio. Antes le costaba inglés y ahora está approve con muy buenas notas. Muy profesionales pero también muy copados.',
  },
];

export const SEO_CONFIG = {
  title: 'Che Profe | Clases Particulares y Mentorías en Zona Oeste',
  description: 'Clases particulares y mentorías para primario, secundario y universitario. ING. Metalúrgica, Eléctrica, Informática y más. Modalidad presencial Zona Oeste o virtual.',
  keywords: [
    'clases particulares zona oeste',
    'apoyo escolar buenos aires',
    'clases universitarias argentina',
    'clases de matemática',
    'clases de física',
    'mentorías estudiantiles',
    'clases particulares virtuales',
    'preparación exámenes',
    'UNAHUR',
    'profesores particulares',
  ],
  url: 'https://cheprofe.com.ar',
  siteName: 'Che Profe',
};

export const CURRENCY_FORMAT = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0,
});