import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import CourseDetail from './pages/CourseDetail'
import InscriptionSuccess from './pages/InscriptionSuccess'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/cursos/:id" element={<CourseDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inscripcion-exitosa" element={<InscriptionSuccess />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
