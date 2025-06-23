import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
          <div className="flex flex-col items-start gap-4 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aula Digital Ciudadana
            </h1>
            <p className="text-lg">Aprende y potencia tu carrera con cursos online dictados por profesionales del desarrollo web.</p>
            <Link to="/cursos">
              <Button variant="primary">Explorar cursos</Button>
            </Link>
          </div>
          <img
            src="/images/hero.png"
            alt="Estudiantes programando"
            className="w-full md:w-1/2 rounded-lg shadow-xl"
          />
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-quality.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Contenido de calidad</h2>
              <p>Lecciones actualizadas para que aprendas con la tecnología más reciente.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-flexibility.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">A tu propio ritmo</h2>
              <p>Accede a las clases cuando quieras y avanza de acuerdo a tu disponibilidad.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-support.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Foro de la comunidad</h2>
              <p>
                Resuelve tus dudas junto a otros alumnes y asesores en nuestro foro.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">¿Cómo inscribirse?</h2>
          <ol className="list-decimal pl-5 space-y-2 text-left max-w-prose">
            <li>Crea una cuenta gratuita en nuestro sitio.</li>
            <li>Explora el catálogo y elige el curso que prefieras.</li>
            <li>Completa el formulario de inscripción y comienza a aprender.</li>
          </ol>
          <Link to="/cursos">
            <Button variant="primary">Comenzar ahora</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
