export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm">
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-4">
        <div>
          <img src="/logo.png" alt="Logo" className="h-8 mb-2" />
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
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Tu correo"
              className="p-2 rounded border text-gray-800"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-300 dark:bg-gray-900">
        © 2025 Aula Digital Ciudadana
      </div>
    </footer>
  )
}
