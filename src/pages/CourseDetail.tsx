import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'
import { getInstructorByCourse } from '../data/instructors'

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
            <p className="text-lg">{course.description}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 bg-gray-200 rounded underline font-semibold">Dificultad: {course.level}</span>
            <span className="px-3 py-1 bg-gray-200 rounded">Duración: {course.duration}</span>
            <span className="px-3 py-1 bg-gray-200 rounded">Módulos: {course.modules.length}</span>
          </div>
          <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
          <p>
            ¿Tienes dudas? Escríbenos a{' '}
            <a href="mailto:correo@example.com" className="text-blue-600 underline">
              correo@example.com
            </a>
            .
          </p>
          <h2 className="text-2xl font-bold">Instructor</h2>
          {instructor && (
            <div className="border rounded p-4 flex flex-col items-center gap-2 w-full">
              <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold">{instructor.name}</span>
            </div>
          )}
          <div className="space-y-2">
            {progress ? (
              <div className="border rounded p-4 space-y-3">
                <p className="font-semibold">
                  {progress.completed >= progress.total && progress.grade !== undefined
                    ? `Curso finalizado - Nota: ${progress.grade}`
                    : progress.completed >= progress.total
                      ? 'Curso finalizado'
                      : `${Math.round((progress.completed / progress.total) * 100)}% completado`}
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
                <div className="w-full bg-gray-200 rounded h-6 relative overflow-hidden">
                  <div
                    className="bg-blue-600 h-6 rounded text-white text-center text-sm flex items-center justify-center"
                    style={{ width: `${progressPercent}%` }}
                  >
                    {progressPercent}%
                  </div>
                </div>
                {progress.completed >= progress.total &&
                  (progress.grade === undefined || progress.grade < 40) &&
                  attemptsRemaining > 0 ? (
                    <>
                      <p className="text-sm text-red-600">
                        Debes volver a contestar la evaluación
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
                    <Button onClick={() => navigate(`/cursos/${id}/modulo/${progress.completed + 1}`)}>Seguir</Button>
                  )}
              </div>
            ) : (
              <div className="border rounded p-4 space-y-3">
                <p className="font-semibold">
                  ¿Listo para comenzar? Inscríbete al curso para acceder a todos los módulos.
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
                  {isLogged ? 'Inscribirme' : 'Inicia sesión para inscribirte'}
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
                const allowed = progress ? num <= progress.completed + 1 : false
                const isCurrent = progress ? num === progress.completed + 1 : false
                return (
                  <li
                    key={m.id}
                    className={`border rounded ${
                      completed ? 'bg-green-50' : ''
                    } ${isCurrent && !completed ? 'bg-blue-50 border-blue-400' : ''}`}
                  >
                    {isLogged && allowed ? (
                      <Link to={`/cursos/${id}/modulo/${m.id}`} className="block p-3">
                        <div className={`font-semibold ${completed ? 'line-through' : ''}`}>
                          Módulo {i + 1}: {m.title}
                        </div>
                        <p className="text-sm text-gray-600">{m.description}</p>
                        {completed && (
                          <p className="text-xs italic text-gray-500">Haz clic para verlo nuevamente</p>
                        )}
                      </Link>
                    ) : (
                      <div className="p-3">
                        <span className={`font-semibold ${completed ? 'line-through' : ''}`}>Módulo {i + 1}: {m.title}</span>
                        <p className="text-sm text-gray-600">{m.description}</p>
                      </div>
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
