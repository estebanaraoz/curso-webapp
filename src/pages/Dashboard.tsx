import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { useAuthStore } from '../store/auth'
import { Link, useNavigate } from 'react-router-dom'
import { courses } from '../data/courses'
import getNextClassLink from '../utils/getNextClassLink'

export default function Dashboard() {
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const logout = useAuthStore(state => state.logout)
  const navigate = useNavigate()
  const currentCourses = enrolledCourses.filter(c => c.completed < c.total)
  const finishedCourses = enrolledCourses.filter(c => c.completed >= c.total)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex p-4 gap-4">
        <aside className="w-56">
          <ul className="space-y-2">
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
        <section className="flex-grow space-y-4">
          <div className="border border-black rounded p-4 space-y-4">
            <h1 className="text-3xl font-bold">Mis cursos</h1>
            {enrolledCourses.length === 0 ? (
              <p>Todavía no te inscribiste a ningún curso.</p>
            ) : (
              <>
                {currentCourses.length > 0 && (
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Cursos en curso</h2>
                    <div className="grid gap-4 justify-center [grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))]">
                      {currentCourses.map(course => {
                        const info = courses.find(c => c.id === course.id)
                        const nextLink = info ? getNextClassLink(info, course) : null
                        const completed = course.completed
                        const total = course.total
                        const remaining = total - completed
                        const data = [
                          { name: 'Completado', value: completed },
                          { name: 'Restante', value: remaining },
                        ]
                        return (
                          <div
                            key={course.id}
                            className="border p-4 rounded shadow flex flex-col items-center gap-2 w-[300px] overflow-hidden"
                          >
                            {info?.image && (
                              <div className="relative w-full">
                                <img
                                  src={info.image}
                                  alt={course.title}
                                  className="w-full h-48 object-cover rounded"
                                />
                              </div>
                            )}
                            <h2 className="text-xl font-semibold text-center w-full">
                              {course.title}
                            </h2>
                            <PieChart width={120} height={120}>
                              <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={50}
                              >
                                <Cell fill="#4ade80" />
                                <Cell fill="#e5e7eb" />
                              </Pie>
                              <Tooltip />
                            </PieChart>
                            <p className="text-sm">
                              {course.completed} de {course.total} módulos
                            </p>
                            <div className="flex gap-2 mt-auto">
                              <Button
                                onClick={() => navigate(`/cursos/${course.id}`)}
                                variant="secondary"
                              >
                                Ver curso
                              </Button>
                              <Button
                                onClick={() => nextLink && navigate(nextLink)}
                                disabled={!nextLink}
                              >
                                Continuar curso
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
                {finishedCourses.length > 0 && (
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Cursos finalizados</h2>
                    <div className="grid gap-4 justify-center [grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))]">
                      {finishedCourses.map(course => {
                        const info = courses.find(c => c.id === course.id)
                        return (
                          <div
                            key={course.id}
                            className="border p-4 rounded shadow flex flex-col gap-2 w-[300px]"
                          >
                            {info?.image && (
                              <div className="relative w-full">
                                <img
                                  src={info.image}
                                  alt={course.title}
                                  className="w-full h-48 object-cover rounded"
                                />
                              </div>
                            )}
                            <h2 className="text-xl font-semibold text-center w-full">
                              {course.title}
                            </h2>
                            <p className="text-center font-semibold">
                              Nota:{' '}
                              {course.grade !== undefined
                                ? course.grade
                                : 'Contesta la evaluación para recibir tu calificación.'}{' '}
                              {course.grade !== undefined && (
                                <span
                                  className={`ml-1 px-2 py-0.5 rounded text-xs ${
                                    course.grade >= 40
                                      ? 'bg-green-200 text-green-800'
                                      : 'bg-red-200 text-red-800'
                                  }`}
                                >
                                  {course.grade >= 40 ? 'Aprobado' : 'Desaprobado'}
                                </span>
                              )}
                            </p>
                            <ul className="list-disc pl-6 text-sm flex-grow">
                              {info?.modules.map(m => (
                                <li key={m.id}>{m.title}</li>
                              ))}
                            </ul>
                            <Button
                              onClick={() => navigate(`/cursos/${course.id}`)}
                              variant="secondary"
                            >
                              Ver curso
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="border border-black rounded p-4 space-y-2">
            <h1 className="text-3xl font-bold">Mis calificaciones</h1>
            <p>Próximamente</p>
            <Button>Ver todos mis calificaciones</Button>
          </div>
          <div className="border border-black rounded p-4 space-y-2">
            <h1 className="text-3xl font-bold">Mis certificados</h1>
            <p>Próximamente</p>
            <Button>Ver todos mis certificados</Button>
          </div>
          <div className="border border-black rounded p-4 space-y-2">
            <h1 className="text-3xl font-bold">Mis logros</h1>
            <p>Próximamente</p>
            <Button>Ver todos mis logros</Button>
          </div>
          <div className="border border-black rounded p-4 space-y-2">
            <h1 className="text-3xl font-bold">Mis membresías</h1>
            <p>Próximamente</p>
            <Button>Ver todos mis membresías</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
