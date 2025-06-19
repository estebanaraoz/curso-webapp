import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 bg-gray-200 dark:bg-gray-800">
      <Link to="/">Home</Link>
      <Link to="/cursos">Cursos</Link>
      <Link to="/login" className="ml-auto">Ingresar</Link>
      <DarkModeToggle />
    </nav>
  )
}
