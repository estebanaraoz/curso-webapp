import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'

export default function CourseInscription() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const enroll = useAuthStore(state => state.enroll)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const [agree, setAgree] = useState(false)

  const course = courses.find(c => c.id === id)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLogged) {
      navigate('/login')
      return
    }
    if (enrolledCourses.some(c => c.id === id)) {
      alert('Ya estás inscrito en este curso')
      navigate('/dashboard')
      return
    }
    enroll({
      id: id || '',
      title: course?.title ?? `Curso ${id}`,
      completed: 0,
      total: course?.modules.length ?? 0,
      grade: undefined,
      maxAttempts: course?.maxAttempts ?? 3,
      attempts: 0,
      lastAttempt: undefined,
      classProgress: {},
    })
    navigate('/inscripcion-exitosa', { state: { courseTitle: course?.title } })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-center justify-center">
        {course ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-prose w-full border rounded p-6 bg-white dark:bg-gray-800 text-center items-center">
            <h1 className="text-3xl font-bold text-center">Inscripción a {course.title}</h1>
            <p className="text-center">Lee atentamente el siguiente documento y acepta las condiciones para completar tu inscripción.</p>
            {course.prerequisites && (
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Requisitos</h2>
                {course.prerequisites.courses && course.prerequisites.courses.length > 0 && (
                  <div>
                    <h3 className="font-medium">Cursos previos</h3>
                    <ul className="list-disc list-inside">
                      {course.prerequisites.courses.map(req => {
                        const prereqCourse = courses.find(c => c.id === req)
                        return <li key={req}>{prereqCourse ? prereqCourse.title : req}</li>
                      })}
                    </ul>
                  </div>
                )}
                {course.prerequisites.other && course.prerequisites.other.length > 0 && (
                  <div>
                    <h3 className="font-medium">Otros requisitos</h3>
                    <ul className="list-disc list-inside">
                      {course.prerequisites.other.map(r => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}
            <section className="space-y-1">
              <h2 className="text-xl font-semibold">Información del curso</h2>
              <ul className="list-disc list-inside">
                <li>Duración estimada: {course.weeks} semanas</li>
                <li>Cantidad de módulos: {course.modules.length}</li>
                <li>Régimen de aprobación: completar todos los módulos y aprobar la evaluación final con al menos 40 puntos</li>
              </ul>
            </section>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={e => setAgree(e.target.checked)}
                disabled={!isLogged}
              />
              Acepto las normas del curso
            </label>
            <Button type="submit" disabled={!agree || !isLogged}>
              Confirmar inscripción
            </Button>
            {!isLogged && (
              <div className="flex flex-col items-center gap-2 p-4 rounded border border-red-300 bg-red-100">
                <p className="text-red-700 font-semibold">
                  Debes iniciar sesión para poder inscribirte en este curso.
                </p>
                <Button type="button" onClick={() => navigate('/login')}>
                  Iniciar sesión
                </Button>
              </div>
            )}
          </form>
        ) : (
          <p>Curso no encontrado</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
