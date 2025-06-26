import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/courses'

export default function CoursePrerequisites() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = courses.find(c => c.id === id)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        {course ? (
          <>
            <h1 className="text-3xl font-bold">Requisitos para {course.title}</h1>
            {course.prerequisites?.courses && course.prerequisites.courses.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold">Cursos previos</h2>
                <ul className="list-disc pl-6">
                  {course.prerequisites.courses.map(req => {
                    const prereqCourse = courses.find(c => c.id === req)
                    return <li key={req}>{prereqCourse ? prereqCourse.title : req}</li>
                  })}
                </ul>
              </div>
            )}
            {course.prerequisites?.other && course.prerequisites.other.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold">Otros requisitos</h2>
                <ul className="list-disc pl-6">
                  {course.prerequisites.other.map(r => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            <p>Duración estimada: {course.weeks} semanas</p>
            <Button onClick={() => navigate(`/cursos/${id}/inscripcion`)}>Continuar a inscripción</Button>
          </>
        ) : (
          <p>Curso no encontrado</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
