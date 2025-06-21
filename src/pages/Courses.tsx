import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import { useAuthStore } from '../store/auth'

export default function Courses() {
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const availableCourses = courses.filter(
    c => !enrolledCourses.some(e => e.id === c.id),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-6">
        {isLogged && (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Mis cursos</h1>
            {enrolledCourses.length === 0 ? (
              <p>Aún no estás inscrito en ningún curso.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {enrolledCourses.map(course => {
                  const info = courses.find(c => c.id === course.id)
                  return (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={info?.title ?? course.title}
                      duration={info?.duration ?? ''}
                      level={info?.level ?? ''}
                    />
                  )
                })}
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            {isLogged ? 'Todos los cursos' : 'Cursos disponibles'}
          </h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {(isLogged ? availableCourses : courses).map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                duration={course.duration}
                level={course.level}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
