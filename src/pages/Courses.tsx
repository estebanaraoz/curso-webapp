import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import { useAuthStore } from '../store/auth'
import { useState } from 'react'
import formatDuration from '../utils/formatDuration'

export default function Courses() {
  const isLogged = useAuthStore(state => state.isLogged)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const inProgressCourses = enrolledCourses.filter(
    c => c.grade === undefined || c.grade < 40,
  )
  const completedCourses = enrolledCourses.filter(
    c => c.grade !== undefined && c.grade >= 40,
  )
  const [showCompleted, setShowCompleted] = useState(false)
  const availableCourses = courses.filter(
    c => !inProgressCourses.some(e => e.id === c.id),
  )
  const categories = Array.from(new Set(courses.map(c => c.category)))
  const levels = Array.from(new Set(courses.map(c => c.level)))
  const durations = Array.from(new Set(courses.map(c => formatDuration(c.weeks))))
  const [category, setCategory] = useState('Todos')
  const [level, setLevel] = useState('Todos')
  const [duration, setDuration] = useState('Todas')

  const baseList = isLogged ? availableCourses : courses
  const listWithCompletion = isLogged && !showCompleted
    ? baseList.filter(c => !completedCourses.some(e => e.id === c.id))
    : baseList

  const filteredCourses = listWithCompletion.filter(
    c =>
      (category === 'Todos' || c.category === category) &&
      (level === 'Todos' || c.level === level) &&
      (duration === 'Todas' || formatDuration(c.weeks) === duration),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-6">
        {isLogged && (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Actualmente cursando</h1>
            {inProgressCourses.length === 0 ? (
              <p>No tienes cursos en curso.</p>
            ) : (
              <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,_360px)]">
                {inProgressCourses.map(course => {
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
            {isLogged && (
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={showCompleted}
                  onChange={e => setShowCompleted(e.target.checked)}
                />
                Mostrar cursos realizados
              </label>
            )}
          </div>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,_360px)]">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                weeks={course.weeks}
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
