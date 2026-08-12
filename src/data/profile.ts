import { Profile } from '../types';

export const profile: Profile = {
  name: 'Nicolas Ponce Torres',
  role: 'Full-Stack Engineer',
  tagline: 'Construyo productos con React, TypeScript y Next.js — con foco en datos, ML y mobile. Actualmente escalando Fleect como Co-Founder & CTO.',
  mention: 'Ciencia de Datos',
  stack: ['React', 'TypeScript', 'Next.js'],
  company: {
    name: 'Fleect',
    role: 'Co-Founder & CTO'
  },
  education: {
    institution: 'Duoc UC',
    graduationDate: 'egreso 12/2026'
  },
  status: {
    id: 'available_for_internship',
    label: 'Disponible para práctica profesional · Dic 2026'
  },
  location: 'Santiago, Chile',
  contact: {
    email: 'nicolaasponcet@gmail.com',
    github: '#',
    linkedin: '#'
  },
  about: {
    paragraph1: 'Estudiante de Ingeniería en Informática en Duoc UC (egreso diciembre 2026), especializado en desarrollo full-stack con React, TypeScript y Next.js.',
    paragraph2: 'Como Co-Founder & CTO de Fleect diseño y construyo software de gestión de flotas para el mercado B2B, desde la arquitectura hasta el producto en manos de usuarios reales. Me interesa seguir profundizando en Ciencia de Datos, Machine Learning y desarrollo mobile — llevar productos de la idea a producción es lo que más disfruto.',
    stats: [
      {
        value: '4',
        label: 'productos\nconstruidos'
      },
      {
        value: '1',
        label: 'SaaS B2B\nen producción'
      },
      {
        value: '2026',
        label: 'egreso\nDuoc UC'
      }
    ]
  }
};
