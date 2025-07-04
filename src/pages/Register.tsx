import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid w-full max-w-4xl lg:grid-cols-2">
          {/* Upload an SVG or PNG at public/images/auth-illustration.png
              representing modern and accessible online learning */}
          <img
            src="/images/auth-illustration.png"
            alt="Ilustración educativa"
            className="w-full h-48 object-cover lg:h-full"
          />
          <form className="p-8 space-y-4 flex flex-col justify-center" role="form">
            <h1 className="text-2xl font-bold text-gray-800">Crear cuenta</h1>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm" className="text-gray-700">
                Confirmar contraseña
              </label>
              <input
                id="confirm"
                type="password"
                placeholder="••••••••"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                required
              />
            </div>
            <Button type="submit" className="w-full">Registrarme</Button>
            <p className="text-sm text-center text-gray-700">
              ¿Ya tenés cuenta?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
