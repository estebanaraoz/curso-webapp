import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useAuthStore } from '../store/auth'

export default function Profile() {
  const user = useAuthStore(state => state.user)
  const [name, setName] = useState((user as { name?: string } | null)?.name || '')
  const [email, setEmail] = useState((user as { email?: string } | null)?.email || '')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 pb-12 space-y-4">
        <h1 className="text-3xl font-bold">Perfil de usuario</h1>
        <div className="flex flex-col gap-4 max-w-sm">
          <input className="border p-2 rounded" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" />
          <input className="border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <Button>Guardar cambios</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
