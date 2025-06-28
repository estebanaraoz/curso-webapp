import { Link } from 'react-router-dom'
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
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {list.map(c => (
          <li key={c.id}>
            <Link to={`/cursos/${c.id}`} className="flex items-center gap-2">
              <img src={c.image} alt={c.title} className="w-12 h-12 object-cover rounded" />
              <span className="text-blue-600 underline">{c.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
