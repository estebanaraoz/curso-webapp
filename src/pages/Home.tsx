import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 p-8">
          <div className="flex flex-col items-start gap-4 md:w-1/2">
            <h1 className="text-4xl font-bold">Aprende y potencia tu carrera</h1>
            <p className="text-lg">Cursos online dictados por profesionales del desarrollo web.</p>
            <Link to="/cursos">
              <Button variant="primary">Explorar cursos</Button>
            </Link>
          </div>
          <img
            src="/images/hero.jpg"
            alt="Estudiantes programando"
            className="w-full md:w-1/2 rounded shadow"
          />
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-quality.svg" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Contenido de calidad</h2>
              <p>Lecciones actualizadas para que aprendas con la tecnología más reciente.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-flexibility.svg" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">A tu propio ritmo</h2>
              <p>Accede a las clases cuando quieras y avanza de acuerdo a tu disponibilidad.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-support.svg" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Soporte de instructores</h2>
              <p>Resuelve tus dudas con la ayuda de nuestro equipo de expertos.</p>
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
