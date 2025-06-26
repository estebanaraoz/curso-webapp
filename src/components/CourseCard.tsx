import { Link } from 'react-router-dom'
import { InformationCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import { useAuthStore } from '../store/auth'

interface Props {
  id: string
  title: string
  weeks: number
  level: string
  image: string
  /** Show user's progress info inside the card */
  showProgress?: boolean
}

import formatDuration from '../utils/formatDuration'

export default function CourseCard({
  id,
  title,
  weeks,
  level,
  image,
  showProgress = true,
}: Props) {
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const progress = enrolledCourses.find(c => c.id === id)
  const isEnrolled = !!progress
  const showExam =
    progress &&
    progress.completed >= progress.total &&
    (progress.grade === undefined || progress.grade < 40)

  return (
    <div className="border-2 border-gray-300 p-4 rounded shadow hover:shadow-lg flex flex-col gap-4 w-full min-w-[300px]">
      <Link to={`/cursos/${id}`} className="flex flex-col gap-2 flex-grow">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>Duración: {formatDuration(weeks)}</p>
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
      <div className="mt-2 flex flex-col sm:flex-row gap-2 justify-center">
        <Link
          to={`/cursos/${id}`}
          className="flex w-full sm:flex-1 items-center justify-center gap-2 px-4 py-2 text-base rounded bg-indigo-500 text-white hover:bg-indigo-600 min-w-[8rem]"
        >
          <InformationCircleIcon className="h-6 w-6" />
          <span>Ver info</span>
        </Link>
        {!isLogged ? (
          <Link
            to="/login"
            className="flex w-full sm:flex-1 items-center justify-center gap-2 px-4 py-2 text-base rounded bg-orange-500 text-white hover:bg-orange-600 min-w-[8rem]"
          >
            <PlayCircleIcon className="h-6 w-6" />
            <span>Inicia sesión para inscribirte</span>
          </Link>
        ) : (
          <Link
            to={
              isEnrolled
                ? showExam
                  ? `/cursos/${id}/examen-final`
                  : `/cursos/${id}/modulo/${(progress?.completed ?? 0) + 1}`
                : `/cursos/${id}/inscripcion`
            }
            className={`flex w-full sm:flex-1 items-center justify-center gap-2 px-4 py-2 text-base rounded min-w-[8rem] ${
              isEnrolled
                ? showExam
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            <PlayCircleIcon className="h-6 w-6" />
            <span>
              {isEnrolled
                ? showExam
                  ? 'Hacer evaluación'
                  : 'Seguir'
                : 'Comenzar'}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
