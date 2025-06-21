import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

interface Props {
  id: string
  title: string
  duration: string
  level: string
}

export default function CourseCard({ id, title, duration, level }: Props) {
  const isLogged = useAuthStore(state => state.isLogged)

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg flex flex-col gap-2 w-full">
      <Link to={`/cursos/${id}`} className="flex flex-col gap-2 flex-grow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>Duración: {duration}</p>
        <p>Nivel: {level}</p>
      </Link>
      {!isLogged && (
        <Link
          to="/login"
          className="mt-2 px-3 py-1 text-sm rounded bg-blue-600 text-white text-center hover:bg-blue-700"
        >
          Inicia sesión para inscribirte
        </Link>
      )}
    </div>
  )
}
