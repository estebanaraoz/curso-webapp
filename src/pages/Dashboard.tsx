import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

export default function Dashboard() {
  const enrolledCourses = [
    {
      id: '1',
      title: 'Introducci\u00f3n a JavaScript',
      completed: 3,
      total: 8,
    },
    {
      id: '2',
      title: 'React desde cero',
      completed: 1,
      total: 10,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">Mis cursos</h1>
        {enrolledCourses.length === 0 ? (
          <p>Todav\u00eda no te inscribiste a ning\u00fan curso.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {enrolledCourses.map(course => {
              const remaining = course.total - course.completed
              const data = [
                { name: 'Completado', value: course.completed },
                { name: 'Restante', value: remaining },
              ]
              return (
                <div
                  key={course.id}
                  className="border p-4 rounded shadow flex flex-col items-center gap-2"
                >
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
                    {course.completed} de {course.total} clases
                  </p>
                  <Button className="mt-auto">Continuar curso</Button>
                </div>
              )
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
