import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function InscriptionSuccess() {
  const navigate = useNavigate()
  const courseName = 'Introducción a JavaScript'

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center gap-6 p-4 text-center">
        <h1 className="text-4xl font-bold">¡Te inscribiste al curso con éxito!</h1>
        <p className="text-xl">{courseName}</p>
        <div className="flex gap-4 mt-4">
          <Button onClick={() => navigate('/dashboard')}>Ir al Dashboard</Button>
          <Button variant="secondary" onClick={() => navigate('/cursos')}>Volver a Cursos</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
