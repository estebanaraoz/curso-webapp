import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useParams, useNavigate } from 'react-router-dom'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const mockCourse = {
    id: '1',
    title: 'Introducción a JavaScript',
    description: 'Aprendé los fundamentos de JavaScript desde cero.',
    image: 'https://via.placeholder.com/800x300',
    duration: '4 semanas',
    level: 'Principiante',
    classes: 8,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 flex flex-col items-start gap-4">
        <img
          src={mockCourse.image}
          alt={mockCourse.title}
          className="w-full h-48 object-cover rounded"
        />
        <h1 className="text-3xl font-bold">
          {mockCourse.title} (ID: {id})
        </h1>
        <p>{mockCourse.description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="px-3 py-1 bg-gray-200 rounded">
            Nivel: {mockCourse.level}
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded">
            Duración: {mockCourse.duration}
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded">
            Clases: {mockCourse.classes}
          </span>
        </div>
        <Button onClick={() => navigate('/inscripcion-exitosa')}>Inscribirme</Button>
      </main>
      <Footer />
    </div>
  )
}
