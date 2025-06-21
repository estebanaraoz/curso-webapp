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
  const course = courses.find(c => c.id === id)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-start gap-4">
        {course ? (
          <>
            <img
              src={course.image}
              alt={course.title}
              className="w-full max-w-full h-auto object-cover rounded overflow-hidden"
            />
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p>{course.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-200 rounded">Nivel: {course.level}</span>
              <span className="px-3 py-1 bg-gray-200 rounded">Duración: {course.duration}</span>
              <span className="px-3 py-1 bg-gray-200 rounded">Módulos: {course.modules.length}</span>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              {course.modules.map(m => (
                <li key={m.id}>
                  <Link to={`/cursos/${id}/modulo/${m.id}`} className="text-blue-600 underline">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Curso no encontrado</p>
        )}
        <Button
          onClick={() => {
            if (!isLogged) {
              navigate('/login')
            } else {
              navigate(`/cursos/${id}/inscripcion`)
            }
          }}
        >
          Inscribirme
        </Button>
      </main>
      <Footer />
    </div>
  )
}
