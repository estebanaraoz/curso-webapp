import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="text-4xl font-bold">Ocurrió un error</h1>
        <p className="text-lg">Intenta nuevamente más tarde.</p>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </main>
      <Footer />
    </div>
  )
}
