import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Formulario de contacto</h1>
        <form className="border rounded p-4 flex flex-col gap-2 w-full max-w-md" action="mailto:correo@example.com" method="post" encType="text/plain">
          <label className="flex flex-col">
            <span>Nombre</span>
            <input type="text" name="name" required className="border p-2 rounded" />
          </label>
          <label className="flex flex-col">
            <span>Email</span>
            <input type="email" name="email" required className="border p-2 rounded" />
          </label>
          <label className="flex flex-col">
            <span>Mensaje</span>
            <textarea name="message" required className="border p-2 rounded" rows={5} />
          </label>
          <Button type="submit">Enviar</Button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

