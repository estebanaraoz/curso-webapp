import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'

export default function InscriptionForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const enroll = useAuthStore(state => state.enroll)
  const enrolledCourses = useAuthStore(state => state.enrolledCourses)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!isLogged) navigate('/login')
  }, [isLogged, navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (enrolledCourses.some(c => c.id === id)) {
      alert('Ya estás inscrito en este curso')
      navigate('/dashboard')
      return
    }
    const course = courses.find(c => c.id === id)
    enroll({
      id: id || '',
      title: course?.title ?? `Curso ${id}`,
      completed: 0,
      total: course?.modules.length ?? 0,
      grade: undefined,
      maxAttempts: course?.maxAttempts ?? 3,
      attempts: 0,
      lastAttempt: undefined,
    })
    navigate('/inscripcion-exitosa', { state: { courseTitle: course?.title } })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold">Inscripción al curso {id}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
          <input
            className="border p-2 rounded"
            placeholder="Nombre"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Confirmar inscripción</Button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
