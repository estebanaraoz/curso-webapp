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
    if (!progress || progress.completed < progress.total) {
      if (id) complete(id)
      if (progress && progress.completed + 1 >= progress.total) {
        setCurrentCourse(null)
      }
    }
    navigate(-1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        {course && module ? (
          <>
            <h1 className="text-3xl font-bold">{course.title} - {module.title}</h1>
            <p>{module.description}</p>
            {isLogged ? (
              <>
                <a
                  href={module.videoUrl}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver video
                </a>
              </>
            ) : (
              <p className="italic">Inicia sesión para ver el contenido de este módulo.</p>
            )}
          </>
        ) : (
          <p>Módulo no encontrado</p>
        )}
        {isLogged ? (
          <Button
            onClick={handleComplete}
            disabled={progress ? progress.completed >= progress.total : false}
          >
            {progress && progress.completed >= progress.total
              ? 'Curso completado'
              : 'Marcar completado'}
          </Button>
        ) : (
          <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
        )}
      </main>
      <Footer />
    </div>
  )
}
