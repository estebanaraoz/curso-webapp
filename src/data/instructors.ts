export interface InstructorInfo {
  name: string
  role: string
  avatar: string
  bio: string
}

export const instructors: InstructorInfo[] = [
  { name: 'Ing. Marilina López', role: 'Front‑end', avatar: '/images/instructor-marilina.png', bio: 'Especialista en interfaces accesibles.' },
  { name: 'Ing. Juan Pérez', role: 'Back‑end', avatar: '/images/instructor-juan.png', bio: 'Apasionado por la arquitectura de servicios.' },
  { name: 'Lic. Ana Ruiz', role: 'UX', avatar: '/images/instructor-ana.png', bio: 'Diseñadora enfocada en experiencia de usuario.' },
  { name: 'Ing. Luis Gómez', role: 'DevOps', avatar: '/images/instructor-luis.png', bio: 'Automatiza despliegues y buenas prácticas.' },
  { name: 'Mgtr. Sof\u00eda Ramírez', role: 'Data', avatar: '/images/instructor-sofia.png', bio: 'Experta en análisis de datos.' },
]

export function getInstructorByCourse(courseId: string): InstructorInfo {
  const index =
    Math.abs(courseId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) %
    instructors.length
  return instructors[index]
}
