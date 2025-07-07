import { Link } from 'react-router-dom'
import getAssetUrl from '../utils/getAssetUrl'

export default function Footer() {
  return (
    <footer className="bg-gray-500 dark:bg-gray-900 text-white text-sm">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img src={getAssetUrl('/logo.png')} alt="Logo" className="h-16 w-auto mb-2 object-contain" />
          <p className="text-left">
            Aula Digital Ciudadana es una plataforma de formación en línea para que aprendas a tu propio ritmo.
          </p>
        </div>
        <div className="text-lg">
          <h3 className="font-semibold mb-2 text-center">Contacto</h3>
          <ul className="space-y-1 text-left">
            <li>correo@example.com</li>
            <li>Av. Siempre Viva 123</li>
          </ul>
        </div>
        <div className="text-lg">
          <h3 className="font-semibold mb-2 text-center">Quiénes somos</h3>
          <p className="text-left">
            Somos desarrolladores apasionados por compartir conocimiento a través de cursos asíncronos.
          </p>
        </div>
        <div className="text-lg">
          <h3 className="font-semibold mb-2 text-center">Mapa del sitio</h3>
          <ul className="space-y-1 text-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/foro">Foro</Link>
            </li>
            <li>
              <Link to="/dashboard">Mi cuenta</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-600 dark:bg-gray-950 text-white">
        © 2025 Aula Digital Ciudadana
      </div>
    </footer>
  )
}
