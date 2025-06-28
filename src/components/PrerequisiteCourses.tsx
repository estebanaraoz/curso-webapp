import { Link } from 'react-router-dom'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { courses } from '../data/courses'

interface Props {
  courseIds: string[]
}

export default function PrerequisiteCourses({ courseIds }: Props) {
  const list = courses.filter(c => courseIds.includes(c.id))
  if (list.length === 0) return null
  return (
    <section className="border-2 border-gray-300 rounded p-4 space-y-2">
      <h2 className="text-2xl font-bold">Cursos requeridos</h2>
      <p className="text-sm">Debes completar previamente los siguientes cursos:</p>
      <ul className="space-y-2">
        {list.map(c => (
          <li key={c.id}>
            <Link
              to={`/cursos/${c.id}`}
              className="flex items-center gap-2 text-black hover:text-black no-underline"
            >
              <AcademicCapIcon className="w-5 h-5 text-gray-500" />
              <span className="font-semibold">{c.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
