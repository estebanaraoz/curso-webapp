import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import CourseDetail from './pages/CourseDetail'
import InscriptionSuccess from './pages/InscriptionSuccess'
import Dashboard from './pages/Dashboard'
import InscriptionForm from './pages/InscriptionForm'
import Module from './pages/Module'
import FinalExam from './pages/FinalExam'
import Profile from './pages/Profile'
import Forum from './pages/Forum'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/cursos/:id" element={<CourseDetail />} />
      <Route path="/cursos/:id/inscripcion" element={<InscriptionForm />} />
      <Route path="/cursos/:id/modulo/:moduleId" element={<Module />} />
      <Route path="/cursos/:id/examen-final" element={<FinalExam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inscripcion-exitosa" element={<InscriptionSuccess />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/foro" element={<Forum />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
