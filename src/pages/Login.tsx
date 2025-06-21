import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

export default function Login() {
  const navigate = useNavigate()
  const login = useAuthStore(state => state.login)

  const handleLogin = () => {
    login({ name: 'Mariana', email: 'mariana@example.com' })
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-3xl font-bold">Ingresar</h1>
        <button
          onClick={handleLogin}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Iniciar sesión
        </button>
      </main>
      <Footer />
    </div>
  )
}
