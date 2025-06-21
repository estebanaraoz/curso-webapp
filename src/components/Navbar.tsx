import { Link, useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { useAuthStore } from '../store/auth'

export default function Navbar() {
  const navigate = useNavigate()
  const { isLogged, user, logout } = useAuthStore()
  const exampleUser = { name: 'Mariana' }
  const name = (user as { name?: string } | null)?.name ?? exampleUser.name

  return (
    <nav className="p-4 flex items-center gap-4 bg-gray-200 dark:bg-gray-800">
      <Link to="/">Home</Link>
      <Link to="/cursos">Cursos</Link>
      <div className="ml-auto flex items-center gap-4">
        {isLogged ? (
          <>
            <span>Hola, {name}</span>
            <button
              onClick={logout}
              className="px-3 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="px-3 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Ingresar
          </button>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  )
}
