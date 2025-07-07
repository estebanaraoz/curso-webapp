import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function UserFlow() {
  const steps = [
    {
      title: 'Home',
      desc: 'Página inicial con acceso al catálogo de cursos',
    },
    {
      title: 'Cursos',
      desc: 'Lista completa de cursos disponibles',
    },
    {
      title: 'Detalle del curso',
      desc:
        'Información del curso y opción para inscribirse. Si no has iniciado sesión, se solicitará hacerlo',
    },
    {
      title: 'Login',
      desc:
        'Paso obligatorio para inscribirse y acceder al contenido de los módulos',
    },
    {
      title: 'Formulario de inscripción',
      desc: 'Registro al curso una vez iniciada la sesión',
    },
    {
      title: 'Módulos',
      desc:
        'Lecciones del curso. Se desbloquean en orden y requieren sesión activa',
    },
    {
      title: 'Examen final',
      desc: 'Disponible al completar todos los módulos',
    },
    {
      title: 'Dashboard',
      desc:
        'Resumen del progreso, calificaciones y acceso al resto de funcionalidades',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 pb-12 space-y-4">
        <h1 className="text-3xl font-bold">Flujo de usuario</h1>
        <ol className="list-decimal pl-5 space-y-2">
          {steps.map(step => (
            <li key={step.title}>
              <span className="font-semibold">{step.title}</span> – {step.desc}
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  )
}
