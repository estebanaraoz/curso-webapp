import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'

export default function Module() {
  const { id, moduleId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold">Curso {id} - Módulo {moduleId}</h1>
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          Contenido del módulo {moduleId}
        </div>
        <Button onClick={() => navigate(-1)}>Marcar completado</Button>
      </main>
      <Footer />
    </div>
  )
}
