import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

export default function FinalExam() {
  const { id } = useParams()
  const navigate = useNavigate()
  const finishCourse = useAuthStore(state => state.finishCourse)

  const handleFinish = () => {
    if (id) {
      const grade = Math.floor(Math.random() * 101)
      finishCourse(id, grade)
    }
    navigate('/dashboard')
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold">Examen final - Curso {id}</h1>
        <p>Completa las preguntas para finalizar el curso.</p>
        <Button onClick={handleFinish}>Enviar respuestas</Button>
      </main>
      <Footer />
    </div>
  )
}
