import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import getAssetUrl from '../utils/getAssetUrl'
import { Link } from 'react-router-dom'
import {
  UserCircleIcon,
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
          <section className="relative w-full overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center blur-[32px] scale-110 -z-10"
              style={{ backgroundImage: `url(${getAssetUrl('/images/hero.png')})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 to-purple-50/70 dark:from-gray-800/70 dark:to-gray-700/70 backdrop-blur-sm -z-10" />
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 p-8">
              <div className="flex flex-col items-start gap-4 md:w-1/2">
                <h1 className="text-6xl md:text-7xl font-extrabold text-blue-600 pb-2">
                  Aula Digital Ciudadana
                </h1>
                <p className="text-xl">Aprende y potencia tu carrera con cursos online dictados por profesionales del desarrollo web.</p>
                <Link to="/cursos">
                  <Button variant="primary">Explorar cursos</Button>
                </Link>
              </div>
              <img
                src={getAssetUrl('/images/hero.png')}
                alt="Grupo de estudiantes"
                className="w-full md:w-1/2 rounded-lg shadow-xl"
              />
            </div>
          </section>


          <section className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="container mx-auto grid md:grid-cols-3 gap-8 p-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <CheckBadgeIcon className="w-16 h-16 text-blue-600" />
                <h2 className="text-3xl font-semibold">Cursos certificados</h2>
                <p>Inscríbete y recorre cada clase con documentos y videos. Al terminar rendí una evaluación para obtener tu certificado.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ClockIcon className="w-16 h-16 text-blue-600" />
                <h2 className="text-3xl font-semibold">A tu propio ritmo</h2>
                <p>Avanza con total flexibilidad de horarios y elige cuándo tomar cada lección. Repasa los módulos las veces que necesites.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UsersIcon className="w-16 h-16 text-blue-600" />
                <h2 className="text-3xl font-semibold">Foro de la comunidad</h2>
                <p>Participa en un espacio colaborativo con estudiantes y asesores. Comparte dudas y soluciones con la comunidad.</p>
              </div>
            </div>
          </section>

          <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-4">Últimos Cursos</h2>
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
              {featuredCourses.slice(0,4).map(course => (
                <CourseCard key={course.id} {...course} showProgress={false} />
              ))}
            </div>
          </section>

        <section className="container mx-auto py-12 flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold">¿Cómo inscribirse?</h2>
          <div className="grid md:grid-cols-3 gap-4 w-full">
            <div className="p-card rounded-card shadow-card flex flex-col items-center gap-3">
              <UserPlusIcon className="w-10 h-10 text-primary" />
              <p>Registrate gratis</p>
            </div>
            <div className="p-card rounded-card shadow-card flex flex-col items-center gap-3">
              <BookOpenIcon className="w-10 h-10 text-primary" />
              <p>Elegí un curso</p>
            </div>
            <div className="p-card rounded-card shadow-card flex flex-col items-center gap-3">
              <ClipboardDocumentCheckIcon className="w-10 h-10 text-primary" />
              <p>Completá el formulario</p>
            </div>
          </div>
          <Link to="/cursos">
            <Button variant="primary">Comenzar ahora</Button>
          </Link>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-12">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <UserCircleIcon className="w-[60px] h-[60px] mx-auto text-gray-500" />
              <p className="text-xl font-semibold">"Gracias a Aula Digital pude conseguir mi primer trabajo en tecnología"</p>
              <span className="text-base">- Lucía</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UserCircleIcon className="w-[60px] h-[60px] mx-auto text-gray-500" />
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
