import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Dashboard() {
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const navigate = useNavigate()
  const currentCourses = enrolledCourses.filter(c => c.completed < c.total)
  const finishedCourses = enrolledCourses.filter(c => c.completed >= c.total)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Mis cursos</h1>
        {enrolledCourses.length === 0 ? (
          <p>Todav\u00eda no te inscribiste a ning\u00fan curso.</p>
        ) : (
          <>
            {currentCourses.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Cursos en curso</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {currentCourses.map(course => {
                    const info = courses.find(c => c.id === course.id)
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
                        className="border p-4 rounded shadow flex flex-col items-center gap-2 w-full overflow-hidden"
                      >
                        {info?.image && (
                          <img
                            src={info.image}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded"
                          />
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
                            onClick={() =>
                              navigate(`/cursos/${course.id}`)
                            }
                            variant="secondary"
                          >
                            Ver curso
                          </Button>
                          <Button
                            onClick={() =>
                              navigate(`/cursos/${course.id}/modulo/${course.completed + 1}`)
                            }
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
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {finishedCourses.map(course => {
                    const info = courses.find(c => c.id === course.id)
                    return (
                      <div
                        key={course.id}
                        className="border p-4 rounded shadow flex flex-col gap-2 w-full"
                      >
                        {info?.image && (
                          <img
                            src={info.image}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded"
                          />
                        )}
                        <h2 className="text-xl font-semibold text-center w-full">
                          {course.title}
                        </h2>
                        <p className="text-center font-semibold">
                          Nota: {course.grade ?? '-'}{' '}
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
      </main>
      <Footer />
    </div>
  )
}
