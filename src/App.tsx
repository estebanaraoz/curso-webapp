import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import CourseDetail from './pages/CourseDetail'
import InscriptionSuccess from './pages/InscriptionSuccess'
import Dashboard from './pages/Dashboard'
import CourseInscription from './pages/CourseInscription'
import ClassPage from './pages/Class'
import FinalExam from './pages/FinalExam'
import Profile from './pages/Profile'
import Forum from './pages/Forum'
import Nosotros from './pages/Nosotros'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'
import Wireframes from './pages/Wireframes'
import UserFlow from './pages/UserFlow'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/cursos/:id" element={<CourseDetail />} />
      <Route path="/cursos/:id/inscripcion" element={<CourseInscription />} />
        <Route path="/cursos/:id/modulo/:moduleId/clase/:classId" element={<ClassPage />} />
      <Route path="/cursos/:id/examen-final" element={<FinalExam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inscripcion-exitosa" element={<InscriptionSuccess />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/foro" element={<Forum />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/wireframes" element={<Wireframes />} />
      <Route path="/flujo" element={<UserFlow />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
