import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { courses } from '../data/courses'
import { useAuthStore } from '../store/auth'

export default function Module() {
  const { id, moduleId } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const complete = useAuthStore(state => state.completeModule)
  const completeClass = useAuthStore(state => state.completeClass)
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
  const completedClasses =
    progress?.classProgress[moduleId ?? ''] ?? []
  const currentIndex = course?.modules.findIndex(m => m.id === moduleId) ?? -1
  const prevModule =
    currentIndex > 0 && course ? course.modules[currentIndex - 1] : null
  const nextModule =
    course && currentIndex >= 0 && currentIndex < course.modules.length - 1
      ? course.modules[currentIndex + 1]
      : null

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

  const handleCompleteClass = (classId: string) => {
    if (!isLogged || !isEnrolled || !module) return
    if (!moduleId || !id) return
    completeClass(id, moduleId, classId, module.classes?.length ?? 0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-center space-y-4">
        <nav className="text-sm flex items-center gap-2 self-start">
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
          {course && (
            <>
              <span>/</span>
              <Link to={`/cursos/${course.id}`} className="text-blue-600 underline">
                {course.title}
              </Link>
              {module && <span> / Módulo {module.id}</span>}
            </>
          )}
        </nav>
        <div className="flex justify-center gap-4 w-full">
          {prevModule && (
            <button
              onClick={() => navigate(`/cursos/${id}/modulo/${prevModule.id}`)}
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
              onClick={() => navigate(`/cursos/${id}/modulo/${nextModule.id}`)}
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
        <hr className="my-4" />
        {moduleId && (
          <h2 className="text-center text-xl font-semibold">Módulo {moduleId}</h2>
        )}
        {course && module ? (
          <>
            <h1 className="text-3xl font-bold text-center">
              {course.title} - {module.title}
            </h1>
            <p className="text-center">{module.description}</p>
            <p className="text-center text-sm">{module.intro}</p>
            {isLogged && isEnrolled && canAccess ? (
              module.classes && module.classes.length > 0 ? (
                <ul className="space-y-2">
                  {module.classes.map(c => (
                    <li
                      key={c.id}
                      className="border p-3 flex justify-between items-center"
                    >
                      <span>{c.title}</span>
                      {completedClasses.includes(c.id) ? (
                        <span className="text-green-600 text-sm">Completado</span>
                      ) : (
                        <Button
                          onClick={() => handleCompleteClass(c.id)}
                          className="text-sm"
                        >
                          Marcar completado
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border p-4 rounded shadow w-full max-w-[600px] h-[600px] flex items-center justify-center bg-gray-200 mx-auto">
                  Mostrar video
                </div>
              )
            ) : isLogged && isEnrolled && !canAccess ? (
              <p className="italic text-center">
                Primero debes completar el Módulo {prevModule?.id} "{prevModule?.title}"
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
        {isLogged && isEnrolled && !(module?.classes && module.classes.length > 0) ? (
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
        ) : isLogged && !isEnrolled ? null : !isLogged ? (
          <Button onClick={() => navigate('/login')}>Inicia sesión para continuar</Button>
        ) : null}
        <hr className="my-4" />
        <div className="flex justify-center gap-4 w-full">
          {prevModule && (
            <button
              onClick={() => navigate(`/cursos/${id}/modulo/${prevModule.id}`)}
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
              onClick={() => navigate(`/cursos/${id}/modulo/${nextModule.id}`)}
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
      </main>
      <Footer />
    </div>
  )
}
