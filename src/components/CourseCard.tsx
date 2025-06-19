import { Link } from 'react-router-dom'

interface Props {
  id: string
  title: string
  duration: string
  level: string
}

export default function CourseCard({ id, title, duration, level }: Props) {
  return (
    <Link to={`/cursos/${id}`} className="border p-4 rounded shadow hover:shadow-lg flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>Duración: {duration}</p>
      <p>Nivel: {level}</p>
    </Link>
  )
}
