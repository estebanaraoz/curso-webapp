import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import { Link } from 'react-router-dom'
import { UserCircleIcon, UserPlusIcon, BookOpenIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const featuredCourses = courses.slice(0, 5)
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
          <div className="flex flex-col items-start gap-4 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
              Aula Digital Ciudadana
            </h1>
            <p className="text-lg">Aprende y potencia tu carrera con cursos online dictados por profesionales del desarrollo web.</p>
            <Link to="/cursos">
              <Button variant="primary">Explorar cursos</Button>
            </Link>
          </div>
          <img
            src="/images/hero.png"
            alt="Grupo de estudiantes"
            className="w-full md:w-2/3 rounded-lg shadow-xl"
          />
        </section>


        <section className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-quality.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Cursos certificados</h2>
              <p>Inscríbete y recibe un certificado oficial al aprobar la evaluación.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-flexibility.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">A tu propio ritmo</h2>
              <p>
                Avanza con total flexibilidad de horarios y elige cuándo tomar
                cada lección. Repasa los módulos las veces que necesites.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-support.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Foro de la comunidad</h2>
              <p>
                Participa en un espacio colaborativo con estudiantes y asesores
                para compartir dudas y soluciones.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold text-center mb-4">Cursos Destacados</h2>
          <div className="grid gap-4 justify-center [grid-template-columns:repeat(auto-fit,_minmax(360px,_1fr))]">
            {featuredCourses.slice(0,4).map(course => (
              <CourseCard key={course.id} {...course} showProgress={false} />
            ))}
          </div>
        </section>

        <section className="container mx-auto py-12 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">¿Cómo inscribirse?</h2>
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
              <UserCircleIcon className="w-10 h-10 mx-auto text-gray-500" />
              <p className="text-lg font-semibold">"Gracias a Aula Digital pude conseguir mi primer trabajo en tecnología"</p>
              <span className="text-sm">- Lucía</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UserCircleIcon className="w-10 h-10 mx-auto text-gray-500" />
              <p className="text-lg font-semibold">"Los cursos son claros y el soporte del foro es excelente"</p>
              <span className="text-sm">- Mateo</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
