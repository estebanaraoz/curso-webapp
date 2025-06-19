import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="text-4xl font-bold">Bienvenido al sitio de cursos</h1>
        <p className="text-lg">Aprende programación a tu ritmo</p>
        <Link to="/cursos">
          <Button variant="primary">Explorar cursos</Button>
        </Link>
      </main>
      <Footer />
    </div>
  )
}
