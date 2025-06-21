import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function Dashboard() {
  const enrolledCourses = [
    {
      id: '1',
      title: 'Introducci\u00f3n a JavaScript',
      progress: '3 de 8 clases',
    },
    {
      id: '2',
      title: 'React desde cero',
      progress: '1 de 10 clases',
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
            {enrolledCourses.map(course => (
              <div
                key={course.id}
                className="border p-4 rounded shadow flex flex-col gap-2"
              >
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p>{course.progress}</p>
                <Button className="mt-auto">Continuar curso</Button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
