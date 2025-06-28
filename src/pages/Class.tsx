import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
  PlayCircleIcon,
  DocumentIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid'
import { courses } from '../data/courses'
import type { ClassInfo } from '../data/courses'
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
    module?.classes ??
    (Array.from({ length: 3 }, (_, i) => ({
      id: `${i + 1}`,
      title: `Clase ${i + 1}`,
      content: ['video'],
      duration: '0m',
      description: ['Contenido no disponible'],
    })) as ClassInfo[])
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
      <main className="container mx-auto flex-grow p-4 flex flex-col lg:flex-row gap-6">
        <section className="flex-grow space-y-4">
          <nav className="text-sm flex items-center gap-2">
            <Link
              to={`/cursos/${course.id}`}
              className="flex items-center gap-1 text-blue-600 underline"
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
              <span>Volver al curso {course.title}</span>
            </Link>
            <span>/ Módulo {module.id} / Clase {currentClass.id}</span>
          </nav>
          {isLogged ? (
            isCompleted ? (
              <p className="text-sm">
                Ya has marcado como completada esta clase. Pero puedes volver a
                ver el contenido cuando quieras.
              </p>
            ) : (
              <Button onClick={handleComplete} className="w-full max-w-xs">
                Marcar lección como completa
              </Button>
            )
          ) : (
            <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
          )}
          <hr className="my-4" />
          <div className="flex justify-center gap-4">
            {prevClass && (
              <button
                onClick={() =>
                  navigate(`/cursos/${id}/modulo/${moduleId}/clase/${prevClass.id}`)
                }
                className="flex items-center gap-2 border border-black px-4 py-4 w-64"
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
                <span className="text-sm">Clase {prevClass.id} - {prevClass.title}</span>
              </button>
            )}
            {nextClass && (
              <button
                onClick={() =>
                  navigate(`/cursos/${id}/modulo/${moduleId}/clase/${nextClass.id}`)
                }
                className="flex items-center gap-2 border border-black px-4 py-4 w-64"
              >
                <span className="text-sm">Clase {nextClass.id} - {nextClass.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}
          </div>
          <h2 className="text-xl font-bold">Material de la clase</h2>
          <ul className="space-y-2">
            {currentClass.content.map(type => {
              const Icon =
                type === 'video'
                  ? PlayCircleIcon
                  : type === 'document'
                  ? DocumentIcon
                  : DocumentTextIcon
              const label =
                type === 'video'
                  ? `Video · ${currentClass.duration ?? '---'}`
                  : type === 'document'
                  ? 'Documento descargable'
                  : 'Lectura'
              return (
                <li key={type} className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </li>
              )
            })}
          </ul>
          <h1 className="text-2xl font-bold">{currentClass.title}</h1>
          {currentClass.description.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
          <video
            src={module.videoUrl}
            controls
            className="w-full max-h-80 bg-black"
          />
          {isLogged ? (
            isCompleted ? (
              <p className="text-sm">
                Ya has marcado como completada esta clase. Pero puedes volver a
                ver el contenido cuando quieras.
              </p>
            ) : (
              <Button onClick={handleComplete} className="w-full max-w-xs">
                Marcar lección como completa
              </Button>
            )
          ) : (
            <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
          )}
          <hr className="my-4" />
          <div className="flex justify-center gap-4">
            {prevClass && (
              <button
                onClick={() =>
                  navigate(`/cursos/${id}/modulo/${moduleId}/clase/${prevClass.id}`)
                }
                className="flex items-center gap-2 border border-black px-4 py-4 w-64"
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
                <span className="text-sm">Clase {prevClass.id} - {prevClass.title}</span>
              </button>
            )}
            {nextClass && (
              <button
                onClick={() =>
                  navigate(`/cursos/${id}/modulo/${moduleId}/clase/${nextClass.id}`)
                }
                className="flex items-center gap-2 border border-black px-4 py-4 w-64"
              >
                <span className="text-sm">Clase {nextClass.id} - {nextClass.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}
          </div>
        </section>
        <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start space-y-2">
          <h2 className="text-lg font-semibold">Índice</h2>
          <ul className="space-y-2">
            {course.modules.map(m => {
              const open = m.id === moduleId
              const moduleClasses = m.classes ?? []
              const doneClasses = progress?.classProgress[m.id] ?? []
              return (
                <li key={m.id} className="border rounded">
                  <details open={open}>
                    <summary className="cursor-pointer p-2 bg-gray-100 font-medium">
                      Módulo {m.id}: {m.title}
                    </summary>
                    <ul className="pl-4 py-2 space-y-1">
                      {moduleClasses.map(c => {
                        const done = doneClasses.includes(c.id)
                        const current = m.id === moduleId && c.id === classId
                        return (
                          <li key={c.id}>
                            <Link
                              to={`/cursos/${id}/modulo/${m.id}/clase/${c.id}`}
                              className={`flex justify-between items-center ${current ? 'font-semibold text-blue-600' : ''}`}
                            >
                              <span className={`${done ? 'line-through' : ''}`}>{c.title}</span>
                              {done && <span className="text-green-600 text-xs">✓</span>}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </details>
                </li>
              )
            })}
          </ul>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
