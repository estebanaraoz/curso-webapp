import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'

export default function Courses() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Cursos disponibles</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              duration={course.duration}
              level={course.level}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
