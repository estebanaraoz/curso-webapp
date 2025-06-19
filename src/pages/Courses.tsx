import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'

const mockCourses = [
  { id: '1', title: 'React desde cero', duration: '8h', level: 'Básico' },
  { id: '2', title: 'TypeScript avanzado', duration: '6h', level: 'Intermedio' },
  { id: '3', title: 'Node.js APIs', duration: '10h', level: 'Avanzado' },
]

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">Cursos disponibles</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {mockCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
