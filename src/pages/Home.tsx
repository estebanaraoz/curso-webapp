import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const featuredCourses = courses.slice(0, 5)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

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
            alt="Estudiantes programando"
            className="w-full md:w-1/2 rounded-lg shadow-xl"
          />
        </section>


        <section className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/images/icon-quality.png" alt="" className="w-16 h-16" />
              <h2 className="text-xl font-semibold">Cursos certificados</h2>
              <p>
                Inscríbete y recorre cada clase con sus documentos y videos. Al
                finalizar presenta una evaluación corregida por un asesor; si la
                apruebas recibirás un certificado y, de lo contrario, podrás
                volver a intentarlo según el límite del curso.
              </p>
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
          <div className="container mx-auto flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Cursos Destacados</h2>
            <div className="flex gap-4">
              <button
                ref={prevRef}
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                aria-label="Anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span className="hidden sm:inline">Anterior</span>
              </button>
              <button
                ref={nextRef}
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                aria-label="Siguiente"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={swiper => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation!.prevEl = prevRef.current
                swiper.params.navigation!.nextEl = nextRef.current
              }
            }}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            className="w-full max-w-5xl mx-auto"
          >
            {featuredCourses.map(course => (
              <SwiperSlide key={course.id} className="flex items-center justify-center">
                <div className="max-w-md w-full px-4">
                  <CourseCard
                    id={course.id}
                    title={course.title}
                    weeks={course.weeks}
                    level={course.level}
                    image={course.image}
                    showProgress={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="container mx-auto py-12 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">¿Cómo inscribirse?</h2>
          <div className="grid md:grid-cols-3 gap-4 w-full">
            <div className="p-4 border rounded shadow text-center flex flex-col gap-2">
              <div className="text-3xl font-bold">1</div>
              <p>Crea una cuenta gratuita en nuestro sitio.</p>
            </div>
            <div className="p-4 border rounded shadow text-center flex flex-col gap-2">
              <div className="text-3xl font-bold">2</div>
              <p>Explora el catálogo y elige el curso que prefieras.</p>
            </div>
            <div className="p-4 border rounded shadow text-center flex flex-col gap-2">
              <div className="text-3xl font-bold">3</div>
              <p>Completa el formulario de inscripción y comienza a aprender.</p>
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
