import { Link } from 'react-router-dom'
import { InformationCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import { useAuthStore } from '../store/auth'
import getAssetUrl from '../utils/getAssetUrl'

interface Props {
  id: string
  title: string
  weeks: number
  level: string
  image: string
  /** Show user's progress info inside the card */
  showProgress?: boolean
  /** Display action buttons at the bottom of the card */
  showActions?: boolean
  /** Text shown when actions are hidden */
  legend?: string
}

import formatDuration from '../utils/formatDuration'
import { courses } from '../data/courses'
import getNextClassLink from '../utils/getNextClassLink'

export default function CourseCard({
  id,
  title,
  weeks,
  level,
  image,
  showProgress = true,
  showActions = true,
  legend = 'Haz clic para ver más detalles de este curso.',
}: Props) {
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const progress = enrolledCourses.find(c => c.id === id)
  const isEnrolled = !!progress
  const showExam =
    progress &&
    progress.completed >= progress.total &&
    (progress.grade === undefined || progress.grade < 40)
  const course = courses.find(c => c.id === id)
  const totalClasses = course
    ? course.modules.reduce((sum, m) => sum + (m.classes ? m.classes.length : 1), 0)
    : 0
  const completedClasses = course && progress
    ? course.modules.reduce((sum, m, idx) => {
        const classes = m.classes ?? []
        if (classes.length > 0) {
          return sum + (progress.classProgress[m.id]?.length ?? 0)
        }
        return sum + (progress.completed >= idx + 1 ? 1 : 0)
      }, 0)
    : 0
  const percent = totalClasses ? Math.round((completedClasses / totalClasses) * 100) : 0
  const nextLink = course
    ? getNextClassLink(course, progress) ?? `/cursos/${id}`
    : `/cursos/${id}`

  const cardBody = (
    <>
      <img
        src={getAssetUrl(image)}
        alt={title}
        className="w-full aspect-video object-cover rounded"
      />
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p>Duración: {formatDuration(weeks)}</p>
      <p>Nivel: {level}</p>
      {showProgress && isEnrolled && (
        <div className="text-base mt-1 space-y-1">
          {progress && progress.completed >= progress.total ? (
            <>
              <p className="font-semibold text-green-700">Curso finalizado</p>
              <p>
                Nota:{' '}
                {progress.grade !== undefined
                  ? progress.grade
                  : 'Contesta la evaluación para recibir tu calificación.'}{' '}
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
              </p>
            </>
          ) : (
            <>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p>{percent}% completado</p>
            </>
          )}
        </div>
      )}
    </>
  )

  if (!showActions) {
    return (
      <Link
        to={`/cursos/${id}`}
        className="border border-gray-300 p-card rounded-card shadow-card flex flex-col h-full gap-4 w-[320px] min-w-[320px] max-w-[320px] min-h-[420px]"
      >
        {cardBody}
        <p className="mt-auto text-center text-sm text-gray-600">{legend}</p>
      </Link>
    )
  }

  return (
    <div className="border border-gray-300 p-card rounded-card shadow-card flex flex-col h-full gap-4 w-[320px] min-w-[320px] max-w-[320px] min-h-[420px]">
      <Link to={`/cursos/${id}`} className="flex flex-col gap-2 flex-grow">
        {cardBody}
      </Link>
      <div className="mt-auto flex flex-col sm:flex-row gap-2 justify-center">
        <Link
          to={`/cursos/${id}`}
          className="flex w-full sm:flex-1 items-center justify-center gap-2 px-4 py-2 text-base rounded bg-indigo-500 text-white hover:bg-indigo-600 min-w-[8rem] uppercase"
        >
          <InformationCircleIcon className="h-6 w-6" />
          <span>Ver info</span>
        </Link>
        {!isLogged ? (
          <Link
            to={`/cursos/${id}/inscripcion`}
            className="flex w-full sm:flex-1 items-center justify-center gap-2 px-4 py-2 text-base rounded bg-orange-500 text-white hover:bg-orange-600 min-w-[8rem] uppercase"
          >
            <PlayCircleIcon className="h-6 w-6" />
            <span>Comenzar</span>
          </Link>
        ) : (
          <Link
            to={
              isEnrolled
                ? showExam
                  ? `/cursos/${id}/examen-final`
                  : nextLink
                : `/cursos/${id}/inscripcion`
            }
            className={`flex w-full sm:flex-1 items-center justify-center gap-2 px-4 py-2 text-base rounded min-w-[8rem] uppercase ${
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
                  ? 'EVALUACIÓN'
                  : 'VER'
                : 'COMENZAR'}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
