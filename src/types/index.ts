export type EducationLevel = 'primario' | 'secundario' | 'universitario';

export interface Service {
  level: EducationLevel;
  title: string;
  subjects: string[];
}

export interface Price {
  level: EducationLevel;
  title: string;
  price: number;
  note?: string;
}

export interface ModalityOption {
  type: 'presencial' | 'virtual' | 'acoordinar';
  title: string;
  description: string;
  icon: string;
}

export interface Differential {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  level: string;
  text: string;
  avatar?: string;
}

export interface ContactInfo {
  phone: string;
  formattedPhone: string;
  whatsappLink: string;
  location: string;
}