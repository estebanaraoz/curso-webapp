import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

interface Props {
  id: string
  title: string
  duration: string
  level: string
  image: string
  /** Show user's progress info inside the card */
  showProgress?: boolean
}

export default function CourseCard({
  id,
  title,
  duration,
  level,
  image,
  showProgress = true,
}: Props) {
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const progress = enrolledCourses.find(c => c.id === id)
  const isEnrolled = !!progress

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg flex flex-col gap-2 w-full">
      <Link to={`/cursos/${id}`} className="flex flex-col gap-2 flex-grow">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>Duración: {duration}</p>
        <p>Nivel: {level}</p>
        {showProgress && isEnrolled && (
          <p className="text-sm mt-1">
            {progress && progress.completed >= progress.total ? (
              <>
                Curso finalizado - Nota: {progress.grade ?? '-'}{' '}
                {progress.grade !== undefined && (
                  <span
                    className={`ml-1 px-2 py-0.5 rounded text-xs ${
                      progress.grade >= 40
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {progress.grade >= 40 ? 'Aprobado' : 'Desaprobado'}
                  </span>
                )}
              </>
            ) : (
              `${Math.round(
                ((progress?.completed ?? 0) / (progress?.total ?? 1)) * 100,
              )}% completado`
            )}
          </p>
        )}
      </Link>
      <div className="mt-2 flex gap-2">
        <Link
          to={`/cursos/${id}`}
          className="px-3 py-1 text-sm rounded bg-gray-300 text-gray-800 text-center hover:bg-gray-400"
        >
          Ver más
        </Link>
        {!isLogged ? (
          <Link
            to="/login"
            className="px-3 py-1 text-sm rounded bg-blue-600 text-white text-center hover:bg-blue-700"
          >
            Inicia sesión para inscribirte
          </Link>
        ) : (
          !isEnrolled && (
            <Link
              to={`/cursos/${id}/inscripcion`}
              className="px-3 py-1 text-sm rounded bg-blue-600 text-white text-center hover:bg-blue-700"
            >
              Inscribirse
            </Link>
          )
        )}
      </div>
    </div>
  )
}
