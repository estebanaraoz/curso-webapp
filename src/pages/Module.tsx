import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { courses } from '../data/courses'
import { useAuthStore } from '../store/auth'

export default function Module() {
  const { id, moduleId } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const complete = useAuthStore(state => state.completeModule)
  const progress = useAuthStore(state =>
    state.enrolledCourses.find(c => c.id === id),
  )
  const isEnrolled = !!progress
  const moduleNumber = parseInt(moduleId ?? '0', 10)
  const canAccess =
    !moduleId || !isEnrolled || progress.completed >= moduleNumber - 1
  const isCompleted =
    isLogged && isEnrolled && progress.completed >= moduleNumber
  const setCurrentCourse = useAuthStore(state => state.setCurrentCourse)
  const course = courses.find(c => c.id === id)
  const module = course?.modules.find(m => m.id === moduleId)

  useEffect(() => {
    if (id) setCurrentCourse(id)
  }, [id, setCurrentCourse])

  const handleComplete = () => {
    if (!isLogged) {
      navigate('/login')
      return
    }
    if (!canAccess) {
      return
    }
    if (!progress || progress.completed < progress.total) {
      if (id) complete(id)
      if (progress && progress.completed + 1 >= progress.total) {
        setCurrentCourse(null)
        navigate(`/cursos/${id}/examen-final`)
        return
      }
    }
    navigate(-1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-center space-y-4">
        <Button variant="secondary" onClick={() => navigate(-1)}>Volver atrás</Button>
        {course && module ? (
          <>
            <h1 className="text-3xl font-bold text-center">
              {course.title} - {module.title}
            </h1>
            <p className="text-center">{module.description}</p>
            {isLogged && isEnrolled && canAccess ? (
              <div className="border p-4 rounded shadow w-full max-w-md text-center">
                <a
                  href={module.videoUrl}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver video
                </a>
              </div>
            ) : isLogged && isEnrolled && !canAccess ? (
              <p className="italic text-center">
                Primero debes completar el módulo{' '}
                {course?.modules.find(m => m.id === String(moduleNumber - 1))?.title}
              </p>
            ) : isLogged ? (
              <p className="italic text-center">Inscríbete para ver el contenido de este módulo.</p>
            ) : (
              <p className="italic text-center">Inicia sesión para ver el contenido de este módulo.</p>
            )}
          </>
        ) : (
          <p>Módulo no encontrado</p>
        )}
        {isLogged && isEnrolled ? (
          isCompleted ? (
            <p className="text-center italic">Ya has completado este módulo. Puedes volver a ver el video.</p>
          ) : (
            <Button
              className="mx-auto"
              onClick={handleComplete}
              disabled={!canAccess || (progress ? progress.completed >= progress.total : false)}
            >
              {progress && progress.completed >= progress.total
                ? 'Curso completado'
                : 'Marcar completado'}
            </Button>
          )
        ) : isLogged ? null : (
          <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
        )}
      </main>
      <Footer />
    </div>
  )
}
