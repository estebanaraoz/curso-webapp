import { Link, useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { useAuthStore } from '../store/auth'

export default function Navbar() {
  const navigate = useNavigate()
  const { isLogged, user, logout } = useAuthStore()
  const exampleUser = { name: 'Mariana' }
  const name = (user as { name?: string } | null)?.name ?? exampleUser.name

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="p-4 flex flex-wrap items-center gap-4 bg-gray-200 dark:bg-gray-800 text-sm">
      <Link to="/" className="block">Home</Link>
      <Link to="/cursos" className="block">Cursos</Link>
      <Link to="/foro" className="block">Foro</Link>
      {isLogged && (
        <>
          <Link to="/dashboard" className="block">Mis cursos</Link>
          <Link to="/perfil" className="block">Perfil</Link>
        </>
      )}
      <div className="ml-auto flex flex-wrap items-center gap-2">
        {isLogged ? (
          <>
            <span>Hola, {name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded min-w-[6rem] bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 rounded min-w-[6rem] bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Ingresar
          </button>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  )
}
