import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import getAssetUrl from '../utils/getAssetUrl'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-start text-left max-w-md">
            <br />
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
              Error 404 - Página no encontrada
            </h1>
            <br />
            <p className="text-lg mb-6">
              Ups... Lo lamento, la ruta que estás buscando no existe.
            </p>
            <Button onClick={() => navigate('/')}>Volver al inicio</Button>
          </div>

          <img
            src={getAssetUrl('/images/error404.png')}
            alt="falla en la página"
            className="md:w-[400px] lg:w-[500px] object-contain"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
