import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm">
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-4">
        <div>
          <img src="/logo.png" alt="Logo" className="h-16 w-auto mb-2 object-contain" />
          <p>
            Aula Digital Ciudadana es una plataforma de formación en línea para que aprendas a tu propio ritmo.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contacto</h3>
          <ul className="space-y-1">
            <li>correo@example.com</li>
            <li>Av. Siempre Viva 123</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quiénes somos</h3>
          <p>
            Somos desarrolladores apasionados por compartir conocimiento a través de cursos asíncronos.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Mapa del sitio</h3>
          <ul className="space-y-1">
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
      <div className="text-center py-4 bg-gray-300 dark:bg-gray-900">
        © 2025 Aula Digital Ciudadana
      </div>
    </footer>
  )
}
