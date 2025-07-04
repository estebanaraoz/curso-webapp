import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { instructors } from '../data/instructors'
import {
  UsersIcon,
  HeartIcon,
  AcademicCapIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Sobre Aula Digital Ciudadana</h1>
          <p className="text-lg">
            Somos una iniciativa creada por profesionales del desarrollo web con el objetivo de acercar la tecnología a todas las personas. En nuestra plataforma encontrarás cursos prácticos y material actualizado para que aprendas a tu ritmo.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <UsersIcon className="w-12 h-12 text-blue-600" />
            <h2 className="text-xl font-semibold">Cómo trabajamos</h2>
            <p>
              Creamos contenido en pequeñas lecciones acompañado de proyectos reales. Fomentamos la participación en el foro y la colaboración entre estudiantes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <HeartIcon className="w-12 h-12 text-red-600" />
            <h2 className="text-xl font-semibold">Nuestros valores</h2>
            <p>
              Calidad, inclusión y aprendizaje continuo. Creemos que la educación debe ser accesible y motivadora para todas las personas.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <AcademicCapIcon className="w-12 h-12 text-purple-600" />
            <h2 className="text-xl font-semibold">Misión y visión</h2>
            <p>
              Buscamos formar una comunidad que comparta conocimiento y oportunidades. Soñamos con un futuro donde cualquier persona pueda crecer profesionalmente sin barreras.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Nuestro equipo</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {instructors.map(i => (
              <div key={i.name} className="flex flex-col items-center gap-2 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  <UserCircleIcon className="w-20 h-20 text-gray-500" />
                </div>
                <span className="font-medium">{i.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
