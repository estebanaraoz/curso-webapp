import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import DarkModeToggle from './DarkModeToggle'
import { useAuthStore } from '../store/auth'
import getAssetUrl from '../utils/getAssetUrl'

export default function Navbar() {
  const navigate = useNavigate()
  const isLogged = useAuthStore(state => state.isLogged)
  const user = useAuthStore(state => state.user)
  const logout = useAuthStore(state => state.logout)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownMobileRef = useRef<HTMLDivElement>(null)
  const dropdownDesktopRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const clickedInsideMobile =
        dropdownMobileRef.current?.contains(target) ?? false
      const clickedInsideDesktop =
        dropdownDesktopRef.current?.contains(target) ?? false
      if (!clickedInsideMobile && !clickedInsideDesktop) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <nav className="sticky top-0 z-50 bg-primary dark:bg-primary-dark text-white text-lg py-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center py-3 sm:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          className="justify-self-start p-2"
          role="button"
          tabIndex={0}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        <Link
          to="/"
          className="justify-self-center"
          onClick={() => setOpen(false)}
        >
          <img src={getAssetUrl('/logo.png')} alt="Logo" className="h-12 w-auto object-contain" />
        </Link>
        <div className="justify-self-end">
          {isLogged ? (
            <div className="relative" ref={dropdownMobileRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-4 py-2 rounded bg-tertiary text-white hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-haspopup="true"
              >
                <UserCircleIcon className="w-8 h-8" />
                <span className="hidden sm:inline text-lg">{name}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
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
                    className="text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => {
                      setOpen(false)
                      setDropdownOpen(false)
                    }}
                  >
                    Mi cuenta
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Cerrar sesión
                  </button>
                  <DarkModeToggle className="text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" />
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate('/login')
                setOpen(false)
              }}
              className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 uppercase"
            >
              Ingresar
            </button>
          )}
        </div>
      </div>
      <div
        className={`${open ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 py-3 border-t sm:border-none`}
      >
        <Link
          to="/"
          className="hidden sm:block mr-4"
          onClick={() => setOpen(false)}
        >
          <img src={getAssetUrl('/logo.png')} alt="Logo" className="h-12 w-auto object-contain" />
        </Link>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 uppercase ${isActive ? 'text-tertiary' : ''}`}
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/cursos"
          className={({ isActive }) =>
            `block px-4 py-2 uppercase ${isActive ? 'text-tertiary' : ''}`}
          onClick={() => setOpen(false)}
        >
          Cursos
        </NavLink>
        <NavLink
          to="/nosotros"
          className={({ isActive }) =>
            `block px-4 py-2 uppercase ${isActive ? 'text-tertiary' : ''}`}
          onClick={() => setOpen(false)}
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/foro"
          className={({ isActive }) =>
            `block px-4 py-2 uppercase ${isActive ? 'text-tertiary' : ''}`}
          onClick={() => setOpen(false)}
        >
          Foro
        </NavLink>
        <div className="hidden sm:flex sm:ml-auto flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          {isLogged ? (
            <div className="relative w-full sm:w-auto" ref={dropdownDesktopRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 w-full sm:w-auto px-4 py-2 rounded bg-tertiary text-white hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-haspopup="true"
              >
                <UserCircleIcon className="w-8 h-8" />
                <span className="text-lg">{name}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
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
                    className="text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => {
                      setOpen(false)
                      setDropdownOpen(false)
                    }}
                  >
                    Mi cuenta
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Cerrar sesión
                  </button>
                  <DarkModeToggle className="text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" />
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate('/login')
                setOpen(false)
              }}
              className="px-4 py-2 rounded min-w-[6rem] bg-gray-300 text-gray-800 hover:bg-gray-400 uppercase"
            >
              Ingresar
            </button>
          )}
        </div>
      </div>
    </div>
    </nav>
  )
}
