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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-start gap-4">
        {course ? (
          <>
            <img
              src={course.image}
              alt={course.title}
              className="w-full max-h-[200px] object-contain rounded overflow-hidden"
            />
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p>{course.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-200 rounded">Nivel: {course.level}</span>
              <span className="px-3 py-1 bg-gray-200 rounded">Duración: {course.duration}</span>
              <span className="px-3 py-1 bg-gray-200 rounded">Módulos: {course.modules.length}</span>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {course.modules.map(m => {
                const allowed = progress ? parseInt(m.id) <= progress.completed + 1 : false
                const isCurrent = progress ? parseInt(m.id) === progress.completed + 1 : false
                return (
                  <li
                    key={m.id}
                    className={`space-y-1 ${isCurrent ? 'bg-blue-50 border-l-4 border-blue-400 pl-2' : ''}`}
                  >
                    {isLogged && allowed ? (
                      <Link
                        to={`/cursos/${id}/modulo/${m.id}`}
                        className={`${isCurrent ? 'text-blue-700 font-semibold underline' : 'text-blue-600 underline'}`}
                      >
                        {m.title}
                      </Link>
                    ) : (
                      <span className={`font-semibold ${isCurrent ? 'text-blue-700' : 'text-gray-500'}`}>{m.title}</span>
                    )}
                    <p className="ml-4 text-sm text-gray-600">{m.description}</p>
                  </li>
                )
              })}
            </ul>
            {progress && (
              <p className="font-semibold">
                {progress.completed >= progress.total
                  ? `Curso finalizado - Nota: ${progress.grade ?? '-'}`
                  : `${Math.round((progress.completed / progress.total) * 100)}% completado`}
              </p>
            )}
            {progress && progress.completed >= progress.total && (
              <Button onClick={() => navigate(`/cursos/${id}/examen-final`)}>
                Ir al examen final
              </Button>
            )}
        </>
        ) : (
          <p>Curso no encontrado</p>
        )}
        {(!progress || progress.completed < progress.total) && (
          <Button
            onClick={() => {
              if (!progress) {
                if (!isLogged) {
                  navigate('/login')
                } else {
                  navigate(`/cursos/${id}/inscripcion`)
                }
              } else {
                navigate(`/cursos/${id}/modulo/${progress.completed + 1}`)
              }
            }}
          >
            {progress
              ? `Continuar curso (${Math.round((progress.completed / progress.total) * 100)}%)`
              : isLogged
                ? 'Inscribirme'
                : 'Inicia sesión para inscribirte'}
          </Button>
        )}
      </main>
      <Footer />
    </div>
  )
}
