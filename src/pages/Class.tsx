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
  const moduleIndex = course?.modules.findIndex(m => m.id === moduleId) ?? -1
  const prevModule =
    moduleIndex > 0 && course ? course.modules[moduleIndex - 1] : null
  const nextModule =
    course && moduleIndex >= 0 && moduleIndex < course.modules.length - 1
      ? course.modules[moduleIndex + 1]
      : null
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
            <span>/</span>
            <span>Módulo {module.id}</span>
            <span>/ Clase {currentClass.id}</span>
          </nav>
          <video
            src={module.videoUrl}
            controls
            className="w-full max-h-80 bg-black"
          />
          <h1 className="text-2xl font-bold">{currentClass.title}</h1>
          <p>{module.description}</p>
          {isLogged ? (
            <Button onClick={handleComplete} disabled={isCompleted} className="w-full max-w-xs">
              {isCompleted ? 'Completada' : 'Marcar la lección como completa'}
            </Button>
          ) : (
            <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
          )}
          <div className="flex justify-between">
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
          <hr className="my-4" />
          <div className="flex justify-center gap-4">
            {prevModule && (
              <button
                onClick={() =>
                  navigate(
                    `/cursos/${id}/modulo/${prevModule.id}/clase/${
                      prevModule.classes?.[0]?.id ?? '1'
                    }`,
                  )
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
                <span className="text-sm">Módulo {prevModule.id} - {prevModule.title}</span>
              </button>
            )}
            {nextModule && (
              <button
                onClick={() =>
                  navigate(
                    `/cursos/${id}/modulo/${nextModule.id}/clase/${
                      nextModule.classes?.[0]?.id ?? '1'
                    }`,
                  )
                }
                className="flex items-center gap-2 border border-black px-4 py-4 w-64"
              >
                <span className="text-sm">Módulo {nextModule.id} - {nextModule.title}</span>
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
