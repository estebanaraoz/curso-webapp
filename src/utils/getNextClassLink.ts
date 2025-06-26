import { CourseInfo } from '../data/courses'
import type { Course } from '../store/auth'

export default function getNextClassLink(course: CourseInfo, progress?: Course): string | null {
  for (const module of course.modules) {
    const moduleIndex = parseInt(module.id, 10)
    const classes = module.classes ?? []
    if (classes.length > 0) {
      const done = progress?.classProgress[module.id] ?? []
      const next = classes.find(c => !done.includes(c.id))
      if (next) {
        return `/cursos/${course.id}/modulo/${module.id}/clase/${next.id}`
      }
    } else {
      if (!progress || progress.completed < moduleIndex) {
        return `/cursos/${course.id}/modulo/${module.id}`
      }
    }
  }
  return null
}
