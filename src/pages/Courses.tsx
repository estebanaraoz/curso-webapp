import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import { useAuthStore } from '../store/auth'
import { useState } from 'react'

export default function Courses() {
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const availableCourses = courses.filter(
    c => !enrolledCourses.some(e => e.id === c.id),
  )
  const categories = Array.from(new Set(courses.map(c => c.category)))
  const levels = Array.from(new Set(courses.map(c => c.level)))
  const durations = Array.from(new Set(courses.map(c => c.duration)))
  const [category, setCategory] = useState('Todos')
  const [level, setLevel] = useState('Todos')
  const [duration, setDuration] = useState('Todas')
  const filteredCourses = (isLogged ? availableCourses : courses).filter(
    c =>
      (category === 'Todos' || c.category === category) &&
      (level === 'Todos' || c.level === level) &&
      (duration === 'Todas' || c.duration === duration),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-6">
        {isLogged && (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Actualmente cursando</h1>
            {enrolledCourses.length === 0 ? (
              <p>Aún no estás inscrito en ningún curso.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {enrolledCourses.map(course => {
                  const info = courses.find(c => c.id === course.id)
                  return (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={info?.title ?? course.title}
                      duration={info?.duration ?? ''}
                      level={info?.level ?? ''}
                      image={info?.image ?? ''}
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
          <div className="flex flex-wrap gap-4">
            <select
              className="border p-2 rounded"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="Todos">Todas las categorías</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="border p-2 rounded"
              value={level}
              onChange={e => setLevel(e.target.value)}
            >
              <option value="Todos">Todos los niveles</option>
              {levels.map(l => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <select
              className="border p-2 rounded"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            >
              <option value="Todas">Todas las duraciones</option>
              {durations.map(d => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                duration={course.duration}
                level={course.level}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
