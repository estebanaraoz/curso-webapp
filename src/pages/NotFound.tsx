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
      <main className="container mx-auto flex-grow flex items-center justify-center p-4 min-h-[800px]">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
            Error 404 - Página no encontrada
          </h1>
          <p className="text-xl">
            Ups... Lo lamento, la ruta que estás buscando no existe.
          </p>
          <img
            src={getAssetUrl('/images/error404.png')}
            alt="falla en la página"
            className="w-full max-w-lg object-contain"
          />
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
