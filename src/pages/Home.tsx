import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import getAssetUrl from '../utils/getAssetUrl'
import { Link } from 'react-router-dom'
import {
  UserPlusIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  CheckBadgeIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/solid'

export default function Home() {
  const featuredCourses = courses.slice(0, 5)
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
          <section className="relative w-full overflow-hidden min-h-[600px] flex items-center">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
              style={{ backgroundImage: `url(${getAssetUrl('/images/hero.png')})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 to-purple-50/70 dark:from-gray-800/70 dark:to-gray-700/70 -z-10" />
            <div className="container mx-auto flex justify-center p-8">
              <div className="flex flex-col items-start gap-4 md:w-2/3">
                <h1 className="text-6xl md:text-7xl font-extrabold text-primary pb-2">
                  Aula Digital Ciudadana
                </h1>
                <p className="text-xl md:text-2xl text-black">Aprende y potencia tu carrera con cursos online dictados por profesionales del desarrollo web.</p>
                <Link to="/cursos">
                  <Button variant="primary" className="text-lg uppercase px-8 py-4">Explorar Cursos</Button>
                </Link>
              </div>
            </div>
          </section>


          <section className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 p-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <CheckBadgeIcon className="w-16 h-16 text-blue-600" />
                <h2 className="text-3xl font-semibold">Cursos certificados</h2>
                <p>Inscríbete y recorre cada clase con documentos y videos. Al finalizar harás una evaluación para obtener tu certificado oficial.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ClockIcon className="w-16 h-16 text-blue-600" />
                <h2 className="text-3xl font-semibold">A tu propio ritmo</h2>
                <p>Avanza con total flexibilidad de horario y elige cuándo tomar cada lección. Repasa los módulos las veces que necesites.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UsersIcon className="w-16 h-16 text-blue-600" />
                <h2 className="text-3xl font-semibold">Foro de la comunidad</h2>
                <p>Participa en un espacio colaborativo junto a estudiantes y asesores. Comparte dudas y soluciones con toda la comunidad.</p>
              </div>
            </div>
          </section>

          <section className="py-12">
          <h2 className="text-4xl font-bold text-center">Cursos Más Destacados</h2>
          <p className="text-sm text-center mb-4">por la comunidad</p>
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
              {featuredCourses.slice(0,4).map(course => (
                <CourseCard
                  key={course.id}
                  {...course}
                  showProgress={false}
                  showActions={false}
                />
              ))}
            </div>
          </section>

        <section className="container mx-auto py-12 flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold">¿Cómo inscribirse?</h2>
          <div className="grid md:grid-cols-3 gap-4 w-full">
            <div className="relative p-card rounded-card shadow-card flex flex-col items-center gap-3 border border-tertiary">
              <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-tertiary text-white flex items-center justify-center text-sm font-semibold">1</span>
              <UserPlusIcon className="w-16 h-16 text-primary" />
              <h3 className="text-3xl font-semibold">Registrate gratis</h3>
              <p className="text-center">Primero creá tu cuenta de usuario en la plataforma. Completa tus datos de contacto para que podamos identificarte. El registro es totalmente gratuito.</p>
            </div>
            <div className="relative p-card rounded-card shadow-card flex flex-col items-center gap-3 border border-tertiary">
              <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-tertiary text-white flex items-center justify-center text-sm font-semibold">2</span>
              <BookOpenIcon className="w-16 h-16 text-primary" />
              <h3 className="text-3xl font-semibold">Elegí un curso</h3>
              <p className="text-center">Cuando hayas iniciado sesión podrás explorar nuestro catálogo de cursos. Revisa cada propuesta con calma y selecciona la que prefieras. Las clases se realizan paso a paso y a tu ritmo.</p>
            </div>
            <div className="relative p-card rounded-card shadow-card flex flex-col items-center gap-3 border border-tertiary">
              <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-tertiary text-white flex items-center justify-center text-sm font-semibold">3</span>
              <ClipboardDocumentCheckIcon className="w-16 h-16 text-primary" />
              <h3 className="text-3xl font-semibold">Realiza la evaluación</h3>
              <p className="text-center">Al terminar las clases deberás contestar la evaluación final. Envía tus respuestas para demostrar lo aprendido. Si apruebas recibirás un certificado del curso.</p>
            </div>
          </div>
          <Link to="/cursos">
            <Button variant="primary" className="text-lg uppercase px-8 py-4">Explorar Cursos</Button>
          </Link>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-12">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <img
                src={getAssetUrl('/images/testimonials/lucia.png')}
                alt="Lucía"
                className="w-[240px] h-[240px] object-cover rounded-full mx-auto"
              />
              <p className="text-xl font-semibold">"Gracias a Aula Digital pude conseguir mi primer trabajo en tecnología"</p>
              <span className="text-base">- Lucía</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={getAssetUrl('/images/testimonials/mateo.png')}
                alt="Mateo"
                className="w-[240px] h-[240px] object-cover rounded-full mx-auto"
              />
              <p className="text-xl font-semibold">"Los cursos son claros y el soporte del foro es excelente"</p>
              <span className="text-base">- Mateo</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
