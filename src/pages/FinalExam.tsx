import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import { courses } from '../data/courses'

export default function FinalExam() {
  const { id } = useParams()
  const navigate = useNavigate()
  const finishCourse = useAuthStore(state => state.finishCourse)
  const enrolled = useAuthStore(state => state.enrolledCourses)
  const progress = enrolled.find(c => c.id === id)
  const course = courses.find(c => c.id === id)
  const canRetakeExam = progress
    ? (!progress.lastAttempt ||
        Date.now() - progress.lastAttempt >= 24 * 60 * 60 * 1000) &&
      progress.attempts < progress.maxAttempts
    : false

  const questions = [
    {
      id: 1,
      text: '¿Cuál de estas etiquetas se usa para crear un enlace? ',
      options: ['div', 'a', 'span', 'p'],
      answer: 'a',
    },
    {
      id: 2,
      text: '¿Qué propiedad de CSS se utiliza para cambiar el color de fondo?',
      options: ['color', 'background-color', 'font-size', 'margin'],
      answer: 'background-color',
    },
    {
      id: 3,
      text: '¿Cuál es el operador de asignación en JavaScript?',
      options: ['=', '==', '===', ':='],
      answer: '=',
    },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleChange = (qid: number, value: string) => {
    setAnswers(prev => ({ ...prev, [qid]: value }))
  }

  const handleFinish = () => {
    if (id) {
      const correct = questions.reduce(
        (sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0),
        0,
      )
      const grade = Math.round((correct / questions.length) * 100)
      finishCourse(id, grade)
    }
    navigate('/dashboard')
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold">
          Examen final - {course ? course.title : `Curso ${id}`}
        </h1>
        {canRetakeExam ? (
          <form onSubmit={e => { e.preventDefault(); handleFinish() }} className="space-y-4">
            {questions.map(q => (
              <div key={q.id} className="space-y-2">
                <p className="font-semibold">
                  {q.id}. {q.text}
                </p>
                <div className="flex flex-col gap-1 ml-4">
                  {q.options.map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleChange(q.id, option)}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <Button type="submit">Enviar respuestas</Button>
          </form>
        ) : (
          <p className="text-red-600">Aún no puedes realizar este examen.</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
