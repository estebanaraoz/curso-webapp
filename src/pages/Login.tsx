import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-4 gap-4">
        <h1 className="text-3xl font-bold">Ingresar</h1>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input
            className="border rounded p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="border rounded p-2"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button variant="primary" type="submit">Ingresar</Button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
