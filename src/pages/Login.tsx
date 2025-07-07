import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import getAssetUrl from '../utils/getAssetUrl'

const DEFAULT_USER = {
  name: 'usuario',
  email: 'usuario@cursos.com.ar',
  password: 'usuario',
}

export default function Login() {
  const navigate = useNavigate()
  const login = useAuthStore(state => state.login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
      login({ name: DEFAULT_USER.name, email: DEFAULT_USER.email })
      navigate('/')
    } else {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid w-full max-w-4xl lg:grid-cols-2">
          {/* Upload an SVG or PNG at public/images/auth-illustration.png
              representing modern and accessible online learning */}
          <img
            src={getAssetUrl('/images/auth-illustration.png')}
            alt="Ilustración educativa"
            className="w-full h-48 object-cover lg:h-full"
          />
          <form
            className="p-8 space-y-4 flex flex-col justify-center"
            role="form"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-bold text-gray-800">Iniciar sesión</h1>
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="" />
                <span className="text-lg text-gray-700">Recordarme</span>
              </label>
              <a href="#" className="text-base text-blue-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            {error && (
              <p className="text-base text-red-600" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full">Iniciar sesión</Button>
            <p className="text-base text-center text-gray-700">
              ¿No tenés una cuenta?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
