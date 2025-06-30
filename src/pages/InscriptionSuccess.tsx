import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function InscriptionSuccess() {
  const navigate = useNavigate()
  const location = useLocation()
  const courseName = (location.state as { courseTitle?: string } | null)?.courseTitle ?? 'Introducción a JavaScript'

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center gap-6 p-4 text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-600" />
        <h1 className="text-4xl font-bold">¡Te inscribiste al curso con éxito!</h1>
        <p className="text-xl">{courseName}</p>
        <div className="flex gap-4 mt-4">
          <Button className="bg-sky-500 hover:bg-sky-600 text-white" onClick={() => navigate('/dashboard')}>
            Ir a mi cuenta
          </Button>
          <Button className="bg-gray-500 hover:bg-gray-600 text-white" onClick={() => navigate('/cursos')}>
            Volver a Cursos
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
