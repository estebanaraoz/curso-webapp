import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const courses = [
  {
    id: '1',
    title: 'JavaScript desde cero',
    description: 'Curso introductorio a JS',
  },
  {
    id: '2',
    title: 'React intermedio',
    description: 'Componentes, hooks y más',
  },
]

export default function Courses() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Cursos disponibles</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {courses.map(course => (
            <div
              key={course.id}
              onClick={() => navigate(`/cursos/${course.id}`)}
              className="border p-4 rounded shadow hover:shadow-lg cursor-pointer flex flex-col gap-2"
            >
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
