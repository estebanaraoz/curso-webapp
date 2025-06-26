import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'
import { getInstructorByCourse } from '../data/instructors'
import formatDuration from '../utils/formatDuration'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const course = courses.find(c => c.id === id)
  const instructor = course ? getInstructorByCourse(course.id) : null
  const progress = enrolledCourses.find(c => c.id === id)
  const progressPercent = progress
    ? Math.min(100, Math.round((progress.completed / progress.total) * 100))
    : 0
  const [openModule, setOpenModule] = useState<string | null>(() => {
    if (progress && course) {
      const idx = Math.min(progress.completed, course.modules.length - 1)
      return course.modules[idx].id
    }
    return course?.modules[0]?.id ?? null
  })
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
            <section className="border-2 border-gray-300 rounded p-4 space-y-2">
              <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
              <p>
                ¿Tienes dudas? Escríbelas a través del siguiente formulario para contactarnos.
              </p>
              <Link
                to={`/contacto?curso=${id}`}
                className="text-blue-600 underline"
              >
                Ir al formulario
              </Link>
            </section>
            <section className="border-2 border-gray-300 rounded p-4 space-y-2">
              <h2 className="text-2xl font-bold">Instructor</h2>
              {instructor && (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                    <UserCircleIcon className="absolute w-20 h-20 text-gray-400" />
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold">{instructor.name}</span>
                </div>
              )}
            </section>
          <div className="space-y-2">
            {progress ? (
              <div className="border-2 border-gray-300 rounded p-4 space-y-3">
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
                      onClick={() => navigate(`/cursos/${id}/modulo/${progress.completed + 1}`)}
                    >
                      Próxima clase
                    </Button>
                  )}
              </div>
            ) : (
              <div className="border-2 border-gray-300 rounded p-4 space-y-3">
                <p className="font-semibold">
                  Aún no estás inscrito a este curso. Si estás listo, haz clic en Comenzar para inscribirte.
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
              </div>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-4">Módulos</h2>
        <ul className="space-y-3 w-full">
          {course.modules.map((m, i) => {
            const num = parseInt(m.id)
            const completed = progress ? progress.completed >= num : false
            const classes =
              m.classes ?? []
            const completedClasses = progress?.classProgress[m.id] ?? []
            return (
              <li
                key={m.id}
                className={`border-2 rounded border-gray-300 ${completed ? 'bg-green-50' : ''}`}
              >
                <details
                  open={openModule === m.id}
                  onToggle={e =>
                    setOpenModule((e.target as HTMLDetailsElement).open ? m.id : null)
                  }
                >
                  <summary className="p-3 cursor-pointer">
                    <div className={`font-semibold ${completed ? 'line-through' : ''}`}>Módulo {i + 1}: {m.title}</div>
                    <p className="text-sm text-gray-600">{m.description}</p>
                  </summary>
                  <ul className="pl-5 pr-3 pb-3 space-y-1">
                    {classes.map(c => {
                      const done = completedClasses.includes(c.id)
                      return (
                        <li key={c.id} className="flex justify-between items-center border-b last:border-b-0 py-1">
                          <span className={done ? 'line-through text-gray-600' : ''}>{c.title}</span>
                          {isLogged && progress ? (
                            done ? (
                              <span className="text-green-600 text-xs">Completado</span>
                            ) : (
                              <Link
                                to={`/cursos/${id}/modulo/${m.id}/clase/${c.id}`}
                                className="text-blue-600 underline text-xs"
                              >
                                Ver
                              </Link>
                            )
                          ) : null}
                        </li>
                      )
                    })}
                  </ul>
                </details>
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
