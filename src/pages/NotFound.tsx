import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="text-4xl font-bold">P\u00e1gina no encontrada</h1>
        <p className="text-lg">La ruta que est\u00e1s buscando no existe.</p>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </main>
      <Footer />
    </div>
  )
}
