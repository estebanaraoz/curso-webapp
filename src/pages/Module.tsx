import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import { useAuthStore } from '../store/auth'

export default function Module() {
  const { id, moduleId } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const complete = useAuthStore(state => state.completeModule)
  const course = courses.find(c => c.id === id)
  const module = course?.modules.find(m => m.id === moduleId)

  const handleComplete = () => {
    if (!isLogged) {
      navigate('/login')
    } else {
      if (id) complete(id)
      navigate(-1)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        {course && module ? (
          <>
            <h1 className="text-3xl font-bold">{course.title} - {module.title}</h1>
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              Contenido del módulo {moduleId}
            </div>
          </>
        ) : (
          <p>Módulo no encontrado</p>
        )}
        <Button onClick={handleComplete}>Marcar completado</Button>
      </main>
      <Footer />
    </div>
  )
}
