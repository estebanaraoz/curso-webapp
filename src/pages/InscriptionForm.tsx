import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useAuthStore } from '../store/auth'

export default function InscriptionForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isLogged, enroll } = useAuthStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!isLogged) navigate('/login')
  }, [isLogged, navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    enroll({ id: id || '', title: `Curso ${id}`, progress: '0 de 8 clases' })
    navigate('/inscripcion-exitosa', { state: { courseTitle: `Curso ${id}` } })
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
