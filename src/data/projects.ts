import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'PROJECT_01',
    title: 'Fleect',
    status: 'En producción',
    role: 'Co-Founder & CTO',
    description: 'SaaS B2B para gestión de flotas, con arquitectura multi-tenant y aislamiento de datos por RLS. OCR automatizado de documentos con Gemini API.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini API']
  },
  {
    id: 'PROJECT_02',
    title: 'Sistema Predictivo Climático',
    status: 'Completado',
    role: 'Proyecto académico · Data/ML',
    description: 'Pipeline CRISP-DM completo: modelo de clasificación (84% Recall) y de regresión (R² 66%) sobre datos climáticos, con dashboard de resultados en Power BI.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Power BI']
  },
  {
    id: 'PROJECT_03',
    title: 'SalchiHealth',
    status: 'Completado',
    role: 'Full-Stack Mobile',
    description: 'App móvil de monitoreo clínico y salud preventiva para perros salchicha, con diseño de interfaz inspirado en las guías de iOS.',
    stack: ['React Native', 'Expo', 'Supabase']
  },
  {
    id: 'PROJECT_04',
    title: 'SnkrHub',
    status: 'Completado',
    role: 'Full-Stack Mobile',
    description: 'App para coleccionistas de zapatillas: portafolio financiero e inventario con seguimiento de lanzamientos en tiempo real.',
    stack: ['Ionic', 'Angular', 'Firebase']
  }
];
