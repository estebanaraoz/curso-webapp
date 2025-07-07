import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { instructors } from '../data/instructors'
import {
  UsersIcon,
  HeartIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import getAssetUrl from '../utils/getAssetUrl'

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-6xl font-extrabold">Sobre Aula Digital Ciudadana</h1>
          <p className="text-xl">
            Somos una iniciativa creada por profesionales del desarrollo web con el objetivo de acercar la tecnología a todas las personas. En nuestra plataforma encontrarás cursos prácticos y material actualizado para que aprendas a tu ritmo.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <UsersIcon className="w-16 h-16 text-blue-600" />
            <h2 className="text-4xl font-semibold">Cómo trabajamos</h2>
            <p>
              Creamos contenido en lecciones breves con proyectos reales. Incentivamos la participación en el foro y la colaboración permanente entre todos los estudiantes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <HeartIcon className="w-16 h-16 text-red-600" />
            <h2 className="text-4xl font-semibold">Nuestros valores</h2>
            <p>
              Promovemos la calidad, la inclusión y el aprendizaje continuo. Creemos que la educación debe ser accesible, inspiradora y motivadora para todas las personas.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <AcademicCapIcon className="w-16 h-16 text-purple-600" />
            <h2 className="text-4xl font-semibold">Misión y visión</h2>
            <p>
              Buscamos formar una comunidad que comparta conocimiento y oportunidades. Soñamos con un futuro en el que cualquier persona pueda crecer profesionalmente sin barreras.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl font-bold text-center">Nuestro equipo</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {instructors.map(i => (
              <div key={i.name} className="p-card rounded-card shadow-card text-center space-y-2 border border-tertiary">
                <img src={getAssetUrl(i.avatar)} alt={i.name} className="w-[240px] h-[240px] object-cover rounded-full mx-auto" />
                <h3 className="font-semibold">{i.name}</h3>
                <p className="text-base text-gray-600">{i.role}</p>
                <p className="text-base">{i.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
