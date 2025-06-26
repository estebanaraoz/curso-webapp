import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { courses } from '../data/courses'
import { useAuthStore } from '../store/auth'

export default function ClassPage() {
  const { id, moduleId, classId } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const completeClass = useAuthStore(state => state.completeClass)
  const progress = useAuthStore(state =>
    state.enrolledCourses.find(c => c.id === id),
  )
  const setCurrentCourse = useAuthStore(state => state.setCurrentCourse)

  const course = courses.find(c => c.id === id)
  const module = course?.modules.find(m => m.id === moduleId)
  const classes =
    module?.classes ?? Array.from({ length: 3 }, (_, i) => ({
      id: `${i + 1}`,
      title: `Clase ${i + 1}`,
      content: ['video'],
    }))
  const index = classes.findIndex(c => c.id === classId)
  const currentClass = classes[index]
  const prevClass = index > 0 ? classes[index - 1] : null
  const nextClass = index >= 0 && index < classes.length - 1 ? classes[index + 1] : null
  const completedClasses = progress?.classProgress[moduleId ?? ''] ?? []
  const isCompleted = completedClasses.includes(classId ?? '')

  useEffect(() => {
    if (id) setCurrentCourse(id)
  }, [id, setCurrentCourse])

  const handleComplete = () => {
    if (!isLogged || !id || !moduleId || !classId) return
    completeClass(id, moduleId, classId, classes.length)
    if (nextClass) {
      navigate(`/cursos/${id}/modulo/${moduleId}/clase/${nextClass.id}`)
    } else {
      navigate(`/cursos/${id}/modulo/${moduleId}`)
    }
  }

  if (!course || !module || !currentClass) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto flex-grow p-4 flex flex-col items-center justify-center">
          <p>Clase no encontrada</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-center space-y-4">
        <nav className="text-sm flex items-center gap-2 self-start">
          <button
            onClick={() => navigate(-1)}
            aria-label="Volver"
            className="flex items-center gap-1 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <Link to="/cursos" className="text-blue-600 underline">Cursos</Link>
          <span>/</span>
          <Link to={`/cursos/${course.id}`} className="text-blue-600 underline">
            {course.title}
          </Link>
          <span>/ Módulo {module.id}</span>
          <span>/ Clase {currentClass.id}</span>
        </nav>
        <h1 className="text-2xl font-bold text-center">
          {module.title} - {currentClass.title}
        </h1>
        <div className="border p-4 rounded shadow w-full max-w-[600px] h-[400px] flex items-center justify-center bg-gray-200">
          Mostrar contenido de la clase
        </div>
        {isLogged ? (
          <Button onClick={handleComplete} disabled={isCompleted} className="mx-auto">
            {isCompleted ? 'Completada' : nextClass ? 'Marcar y continuar' : 'Marcar completada'}
          </Button>
        ) : (
          <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
        )}
        <div className="flex justify-between w-full max-w-[600px]">
          {prevClass ? (
            <Link
              to={`/cursos/${id}/modulo/${moduleId}/clase/${prevClass.id}`}
              className="text-blue-600 underline"
            >
              ← Clase {prevClass.id}
            </Link>
          ) : (
            <span />
          )}
          {nextClass ? (
            <Link
              to={`/cursos/${id}/modulo/${moduleId}/clase/${nextClass.id}`}
              className="text-blue-600 underline"
            >
              Clase {nextClass.id} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
