import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

export default function CourseDetail() {
  const { id } = useParams()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">Detalle del curso {id}</h1>
        <p>Información del curso próximamente...</p>
      </main>
      <Footer />
    </div>
  )
}
