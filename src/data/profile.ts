import { Profile } from '../types';

export const profile: Profile = {
  name: 'Nicolas Ponce',
  role: 'Software Engineer',
  tagline: 'Ingeniero de Software especializado en arquitecturas modernas. Mi stack principal es React, TypeScript y Next.js, con un fuerte enfoque en bases de datos e integración de Inteligencia Artificial. Diseñando el futuro de Fleect como CTO.',
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
    label: 'Disponible para nuevos desafíos'
  },
  location: 'Santiago, Chile',
  contact: {
    email: 'nicolaasponcet@gmail.com',
    github: 'https://github.com/niponcet',
    linkedin: 'https://www.linkedin.com/in/nicolas-ponce-264694292/'
  },
  about: {
    paragraph1: 'Soy un Ingeniero de Software en formación (Duoc UC, 2026) apasionado por construir productos desde cero, siempre buscando resolver problemas reales a través del código, los datos y la automatización.',
    paragraph2: 'Disfruto construir desde cero, como lo hice con Fleect (SaaS B2B con IA). Busco sumarme a un equipo experimentado para aportar valor inmediato, adoptar prácticas ágiles y escalar mi código en proyectos de alto impacto',
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
