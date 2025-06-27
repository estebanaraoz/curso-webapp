import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useParams, useNavigate, Link } from 'react-router-dom'

import {
  UserCircleIcon,
  LockClosedIcon,
  CheckCircleIcon as CheckCircleSolidIcon,
} from '@heroicons/react/24/solid'
import { CheckCircleIcon as CheckCircleOutlineIcon } from '@heroicons/react/24/outline'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'
import { getInstructorByCourse } from '../data/instructors'
import formatDuration from '../utils/formatDuration'
import getNextClassLink from '../utils/getNextClassLink'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const course = courses.find(c => c.id === id)
  const instructor = course ? getInstructorByCourse(course.id) : null
  const progress = enrolledCourses.find(c => c.id === id)
  const totalClasses = course
    ? course.modules.reduce(
        (sum, m) => sum + (m.classes ? m.classes.length : 1),
        0,
      )
    : 0
  const completedClasses = course && progress
    ? course.modules.reduce((sum, m, idx) => {
        const classes = m.classes ?? []
        if (classes.length > 0) {
          return sum + (progress.classProgress[m.id]?.length ?? 0)
        }
        // module without classes counts as one when completed
        return sum + (progress.completed >= idx + 1 ? 1 : 0)
      }, 0)
    : 0
  const progressPercent = totalClasses
    ? Math.min(100, Math.round((completedClasses / totalClasses) * 100))
    : 0

  const nextLink = course ? getNextClassLink(course, progress) : null

  const canRetakeExam = progress
    ? !progress.lastAttempt ||
      Date.now() - progress.lastAttempt >= 24 * 60 * 60 * 1000
    : false
  const attemptsRemaining = progress ? progress.maxAttempts - progress.attempts : 0

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-start gap-6">
        <nav className="text-sm flex items-center gap-2">
          <button onClick={() => navigate(-1)} aria-label="Volver" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <Link to="/cursos" className="text-blue-600 underline">Cursos</Link>
          {course && <span> / {course.title}</span>}
        </nav>
        {course ? (
          <>
          <div className="space-y-4 w-full">
            <img
              src={course.image}
              alt={course.title}
              className="w-full max-h-[300px] object-contain rounded overflow-hidden"
            />
            <h1 className="text-4xl font-extrabold">{course.title}</h1>
            <section className="border-2 border-gray-300 rounded p-4 space-y-4">
              <p className="text-lg">{course.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-200 rounded underline font-semibold">Dificultad: {course.level}</span>
                <span className="px-3 py-1 bg-gray-200 rounded">Duración: {formatDuration(course.weeks)}</span>
                <span className="px-3 py-1 bg-gray-200 rounded">Módulos: {course.modules.length}</span>
                <span className="px-3 py-1 bg-gray-200 rounded">Intentos de evaluación: {course.maxAttempts}</span>
              </div>
            </section>
            {!progress && (
              <section className="border-2 border-gray-300 rounded p-4 space-y-3">
                <p className="font-semibold">
                  Aún no estás inscrito en este curso. Presiona "Comenzar" para
                  revisar los requisitos previos y los términos de aprobación.
                </p>
                <Button
                  onClick={() => {
                    if (!isLogged) {
                      navigate('/login')
                    } else {
                      navigate(`/cursos/${id}/inscripcion`)
                    }
                  }}
                >
                  {isLogged ? 'Comenzar' : 'Inicia sesión para inscribirte'}
                </Button>
              </section>
            )}
            <section className="border-2 border-gray-300 rounded p-4 space-y-2">
              <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
              <p>
                ¿Tienes dudas? Escríbelas a través del siguiente formulario para contactarnos.
              </p>
              <Link to={`/contacto?curso=${id}`}
                className="inline-block">
                <Button>Completar formulario</Button>
              </Link>
            </section>
            <section className="border-2 border-gray-300 rounded p-4 space-y-2">
              <h2 className="text-2xl font-bold">Instructor</h2>
              {instructor && (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                    <UserCircleIcon className="w-20 h-20 text-gray-400" />
                  </div>
                  <span className="font-semibold">{instructor.name}</span>
                </div>
              )}
            </section>
          <div className="space-y-2">
            {progress && (
              <section className="border-2 border-gray-300 rounded p-4 space-y-3">
                <p className="font-semibold">
                  {progress.completed >= progress.total && progress.grade !== undefined
                    ? `Curso finalizado - Nota: ${progress.grade}`
                    : progress.completed >= progress.total
                      ? 'Curso finalizado'
                      : 'Actualmente en curso'}
                  {progress.completed >= progress.total && progress.grade !== undefined && (
                    <span
                      className={`ml-1 px-2 py-0.5 rounded text-xs ${
                        progress.grade >= 40 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {progress.grade >= 40 ? 'Aprobado' : 'Desaprobado'}
                    </span>
                  )}
                </p>
                <p className="text-center font-semibold">
                  {progressPercent}% completado
                </p>
                <div className="w-full bg-gray-200 rounded h-6 relative overflow-hidden">
                  <div
                    className="bg-blue-600 h-6 rounded"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {progress.completed >= progress.total &&
                  (progress.grade === undefined || progress.grade < 40) &&
                  attemptsRemaining > 0 ? (
                    <>
                      <p className="text-sm text-red-600">
                        Debes volver a contestar la evaluación.
                        {!canRetakeExam &&
                          ' Debes esperar 24 horas antes de volver a responder esta evaluación.'}
                        {' '}Te quedan {attemptsRemaining} intentos.
                      </p>
                      {canRetakeExam ? (
                        <Button onClick={() => navigate(`/cursos/${id}/examen-final`)}>
                          Contestar evaluación
                        </Button>
                      ) : (
                        <Button disabled>Debes esperar 24 horas</Button>
                      )}
                    </>
                  ) : progress.completed >= progress.total && progress.grade !== undefined ? null : (
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => nextLink && navigate(nextLink)}
                      disabled={!nextLink}
                    >
                    Próxima clase
                  </Button>
                )}
              </section>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-4">Módulos</h2>
        {!progress ? (
          <p className="text-sm mb-2">Inscríbete a este curso para comenzar y ver las clases.</p>
        ) : (
          <p className="text-sm mb-2">
            Los próximos módulos se irán desbloqueando a medida que completes cada
            módulo anterior. Debes finalizar todas las clases para habilitar el
            siguiente módulo.
          </p>
        )}
        <ul className="space-y-3 w-full">
          {course.modules.map((m, i) => {
            const num = parseInt(m.id)
            const completed = progress ? progress.completed >= num : false
            const classes = m.classes ?? []
            const completedClasses = progress?.classProgress[m.id] ?? []
            const locked = !progress || (progress.completed < num - 1)
            return (
              <li
                key={m.id}
                className={`border-2 rounded border-gray-300 ${
                  completed ? 'bg-green-50' : locked ? 'bg-gray-100 opacity-60 cursor-not-allowed' : ''
                }`}
              >
                <div className="p-3 flex justify-between">
                  <div>
                    <div className={`font-semibold ${completed ? 'line-through' : ''}`}>Módulo {i + 1}: {m.title}</div>
                    <p className="text-sm text-gray-600">{m.description}</p>
                  </div>
                  {locked && <LockClosedIcon className="w-5 h-5 text-gray-500" />}
                </div>
                {classes.length > 0 && progress && !locked && (
                  <ul className="pl-5 pr-3 pb-3 space-y-1 lined-paper">
                    {classes.map((c, idxClass) => {
                      const done = completedClasses.includes(c.id)
                      const Icon = done ? CheckCircleSolidIcon : CheckCircleOutlineIcon
                      return (
                        <li key={c.id}>
                          <Link
                            to={`/cursos/${id}/modulo/${m.id}/clase/${c.id}`}
                            className="flex justify-between items-center py-2 hover:bg-gray-50"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className={`w-6 h-6 ${done ? 'text-green-600' : 'text-gray-400'}`} />
                              <span className={`${done ? 'line-through text-gray-600' : ''} hover:underline`}>
                                {idxClass + 1}. {c.title}
                              </span>
                            </div>
                            {done ? (
                              <span className="text-green-600 text-sm font-semibold">Completado</span>
                            ) : (
                              <span className="text-blue-600 underline text-sm">Ver</span>
                            )}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        </>
        ) : (
          <p>Curso no encontrado</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
