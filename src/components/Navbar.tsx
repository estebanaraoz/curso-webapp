import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import { useAuthStore } from '../store/auth'

export default function Navbar() {
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const user = useAuthStore(state => state.user)
  const logout = useAuthStore(state => state.logout)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const exampleUser = { name: 'Mariana' }
  const name = (user as { name?: string } | null)?.name ?? exampleUser.name

  const handleLogout = () => {
    logout()
    navigate('/')
    setOpen(false)
    setDropdownOpen(false)
  }

  const toggleMenu = () => setOpen(!open)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 text-sm">
      <div className="flex items-center p-4 sm:hidden">
        <button onClick={toggleMenu} aria-label="Abrir menú" className="mr-auto">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        <DarkModeToggle className="ml-4" />
      </div>
      <div className={`${open ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border-t sm:border-none`}>
        <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/cursos" className="block" onClick={() => setOpen(false)}>Cursos</Link>
        <Link to="/foro" className="block" onClick={() => setOpen(false)}>Foro</Link>
        <div className="sm:ml-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          {isLogged ? (
            <div className="relative w-full sm:w-auto">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 w-full sm:w-auto px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                <span>Hola, {name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border rounded shadow flex flex-col z-10">
                  <Link
                    to="/dashboard"
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => {
                      setOpen(false)
                      setDropdownOpen(false)
                    }}
                  >
                    Mis cursos
                  </Link>
                  <Link
                    to="/perfil"
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => {
                      setOpen(false)
                      setDropdownOpen(false)
                    }}
                  >
                    Perfil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate('/login')
                setOpen(false)
              }}
              className="px-4 py-2 rounded min-w-[6rem] bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              Ingresar
            </button>
          )}
          <DarkModeToggle className="hidden sm:block" />
        </div>
      </div>
    </nav>
  )
}
