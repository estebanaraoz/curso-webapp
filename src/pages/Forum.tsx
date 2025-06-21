import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Forum() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="text-3xl font-bold">Foro de la comunidad</h1>
        <p className="text-lg">Participa y resuelve tus dudas junto a otros alumnes y asesores.</p>
      </main>
      <Footer />
    </div>
  )
}
