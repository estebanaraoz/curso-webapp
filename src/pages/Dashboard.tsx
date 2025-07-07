import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseSlider from '../components/CourseSlider'
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
      <main className="container mx-auto flex-grow flex flex-col md:flex-row p-8 gap-8 items-start">
        <aside className="w-full md:w-56 flex justify-center md:block mb-4 md:mb-0">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <span className="block px-4 py-2 font-semibold">Menú</span>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                Mis cursos
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                Mis calificaciones
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                Mis certificados
              </button>
            </li>
            <li>
              <Link
                to="/perfil"
                className="block w-full text-left px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Editar cuenta
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </aside>
        <section className="flex-grow space-y-4 w-full">
          <div className="border border-gray-300 rounded-card shadow-card p-card space-y-4 w-full">
            <h1 className="text-3xl font-bold">Mis cursos</h1>
            {enrolledCourses.length === 0 ? (
              <p>Todavía no te inscribiste a ningún curso.</p>
            ) : (
              <>
                {currentCourses.length > 0 && (
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Actualmente cursando</h2>
                    <CourseSlider
                      courses={currentCourses.map(course => {
                        const info = courses.find(c => c.id === course.id)
                        return {
                          id: course.id,
                          title: info?.title ?? course.title,
                          weeks: info?.weeks ?? 0,
                          level: info?.level ?? '',
                          image: info?.image ?? '',
                        }
                      })}
                    />
                  </div>
                )}
                {finishedCourses.length > 0 && (
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Cursos finalizados</h2>
                    <CourseSlider
                      courses={finishedCourses.map(course => {
                        const info = courses.find(c => c.id === course.id)
                        return {
                          id: course.id,
                          title: info?.title ?? course.title,
                          weeks: info?.weeks ?? 0,
                          level: info?.level ?? '',
                          image: info?.image ?? '',
                        }
                      })}
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <div className="border border-gray-300 rounded-card shadow-card p-card space-y-2 w-full">
            <h1 className="text-3xl font-bold">Mis calificaciones</h1>
            <p>Aquí verás tus calificaciones</p>
          </div>
          <div className="border border-gray-300 rounded-card shadow-card p-card space-y-2 w-full">
            <h1 className="text-3xl font-bold">Mis certificados</h1>
            <p>Aquí verás tus certificados</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
