import type { CourseInfo } from '../data/courses'
import type { Course } from '../store/auth'

export default function getNextClassLink(
  course: CourseInfo,
  progress?: Course,
): string | null {
  for (const module of course.modules) {
    const classes =
      module.classes ?? [{ id: '1', title: 'Clase 1', content: ['video'] }]
    const done = progress?.classProgress[module.id] ?? []
    const next = classes.find(c => !done.includes(c.id))
    if (next) {
      return `/cursos/${course.id}/modulo/${module.id}/clase/${next.id}`
    }
  }
  return null
}
