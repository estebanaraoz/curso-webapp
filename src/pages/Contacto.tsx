import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useSearchParams } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Contacto() {
  const [params] = useSearchParams()
  const courseId = params.get('curso')
  const course = courses.find(c => c.id === courseId)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Formulario de contacto</h1>
        <form className="border-2 border-gray-300 rounded p-4 flex flex-col gap-2 w-full max-w-md">
          {course && (
            <div className="flex flex-col">
              <span className="font-semibold">Curso</span>
              <input value={course.title} readOnly className="border p-2 rounded bg-gray-100" />
            </div>
          )}
          <label className="flex flex-col">
            <span>Mensaje</span>
            <textarea required className="border p-2 rounded" rows={5} />
          </label>
          <Button type="submit">Enviar</Button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

