import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import { useAuthStore } from '../store/auth'
import { Link, useNavigate } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Dashboard() {
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const logout = useAuthStore(state => state.logout)
  const navigate = useNavigate()
  const currentCourses = enrolledCourses.filter(
    c => c.grade === undefined || c.grade < 40,
  )
  const finishedCourses = enrolledCourses.filter(
    c => c.grade !== undefined && c.grade >= 40,
  )

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col md:flex-row p-8 pb-12 gap-8 items-start">
        <aside className="w-full md:w-56 flex justify-center md:block mb-4 md:mb-0">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <span className="block px-4 py-2 font-semibold">Menú</span>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:text-tertiary">
                Mis cursos
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:text-tertiary">
                Mis calificaciones
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:text-tertiary">
                Mis certificados
              </button>
            </li>
            <li>
              <Link
                to="/perfil"
                className="block w-full text-left px-4 py-2 hover:text-tertiary"
              >
                Editar cuenta
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:text-tertiary"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </aside>
        <section className="flex-grow space-y-4 w-full">
          <div className="border border-gray-300 rounded-card shadow-card p-card space-y-4 w-full">
            <h1 className="text-5xl font-bold">Mis cursos</h1>
            {currentCourses.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold">Actualmente cursando</h2>
                <div className="grid gap-6 items-start justify-center justify-items-center sm:justify-start sm:justify-items-start grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                  {currentCourses.map(course => {
                    const info = courses.find(c => c.id === course.id)
                    return (
                      <CourseCard
                        key={course.id}
                        id={course.id}
                        title={info?.title ?? course.title}
                        weeks={info?.weeks ?? 0}
                        level={info?.level ?? ''}
                        image={info?.image ?? ''}
                      />
                    )
                  })}
                </div>
              </div>
            )}
            {finishedCourses.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold">Cursos finalizados</h2>
                <div className="grid gap-6 items-start justify-center justify-items-center sm:justify-start sm:justify-items-start grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                  {finishedCourses.map(course => {
                    const info = courses.find(c => c.id === course.id)
                    return (
                      <CourseCard
                        key={course.id}
                        id={course.id}
                        title={info?.title ?? course.title}
                        weeks={info?.weeks ?? 0}
                        level={info?.level ?? ''}
                        image={info?.image ?? ''}
                      />
                    )
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="border border-gray-300 rounded-card shadow-card p-card space-y-2 w-full">
            <h1 className="text-5xl font-bold">Mis calificaciones</h1>
          </div>
          <div className="border border-gray-300 rounded-card shadow-card p-card space-y-2 w-full">
            <h1 className="text-5xl font-bold">Mis certificados</h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
