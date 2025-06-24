import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const course = courses.find(c => c.id === id)
  const progress = enrolledCourses.find(c => c.id === id)
  const canRetake = progress?.nextExamDate
    ? new Date(progress.nextExamDate) <= new Date()
    : true

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
          <div className="flex items-center gap-2">
            <span className="font-semibold">Ing. Marilina</span>
          </div>
          <div className="space-y-2">
            {progress ? (
              <>
                <p className="font-semibold">
                  {progress.completed >= progress.total && progress.grade !== undefined
                    ? `Curso finalizado - Nota: ${progress.grade}`
                    : progress.completed >= progress.total
                      ? 'Curso finalizado'
                      : `${Math.round((progress.completed / progress.total) * 100)}% completado`}
                </p>
                {progress.completed >= progress.total ? (
                  progress.grade === undefined ? (
                    <Button
                      onClick={() => navigate(`/cursos/${id}/examen-final`)}
                      disabled={progress.grade !== undefined && progress.grade < 40 && !canRetake}
                    >
                      Contestar evaluación
                    </Button>
                  ) : null
                ) : (
                  <Button onClick={() => navigate(`/cursos/${id}/modulo/${progress.completed + 1}`)}>Seguir</Button>
                )}
              </>
            ) : (
              <p className="font-semibold">
                ¿Listo para comenzar? Inscríbete al curso para acceder a todos los módulos.
              </p>
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
                    className={`border rounded p-3 ${
                      completed ? 'bg-green-50' : ''
                    } ${isCurrent && !completed ? 'bg-blue-50 border-blue-400' : ''}`}
                  >
                    {isLogged && allowed ? (
                      <Link
                        to={`/cursos/${id}/modulo/${m.id}`}
                        className={`block font-semibold ${completed ? 'line-through' : ''}`}
                      >
                        Módulo {i + 1}: {m.title}
                      </Link>
                    ) : (
                      <span className={`font-semibold ${completed ? 'line-through' : ''}`}>
                        Módulo {i + 1}: {m.title}
                      </span>
                    )}
                    <p className="text-sm text-gray-600">{m.description}</p>
                  </li>
                )
              })}
            </ul>
        </>
        ) : (
          <p>Curso no encontrado</p>
        )}
        {!progress && (
          <div className="mt-8 space-y-2">
            <h2 className="text-2xl font-bold">¿Estás listo para inscribirte?</h2>
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
      </main>
      <Footer />
    </div>
  )
}
