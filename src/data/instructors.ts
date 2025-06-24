export interface InstructorInfo {
  name: string
  avatar: string
}

export const instructors: InstructorInfo[] = [
  { name: 'Ing. Marilina', avatar: '/images/instructor-marilina.png' },
  { name: 'Ing. Juan', avatar: '/images/instructor-juan.png' },
  { name: 'Lic. Ana', avatar: '/images/instructor-ana.png' },
  { name: 'Ing. Luis', avatar: '/images/instructor-luis.png' },
  { name: 'Mgtr. Sof\u00eda', avatar: '/images/instructor-sofia.png' },
]

export function getInstructorByCourse(courseId: string): InstructorInfo {
  const index =
    Math.abs(courseId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) %
    instructors.length
  return instructors[index]
}
