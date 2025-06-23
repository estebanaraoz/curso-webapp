import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="text-3xl font-bold">Nosotros</h1>
        <p className="text-lg">Informaci\u00f3n sobre Aula Digital Ciudadana.</p>
      </main>
      <Footer />
    </div>
  )
}
