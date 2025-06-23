import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const files = [
  'home-sin-sesion.html',
  'home-con-sesion.html',
  'courses.html',
  'course-detail.html',
  'inscription-form.html',
  'inscription-success.html',
  'dashboard.html',
  'module.html',
  'final-exam.html',
  'forum.html',
  'login.html',
  'profile.html',
  'error-page.html',
  'not-found.html',
]

export default function Wireframes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-4">
        <h1 className="text-3xl font-bold">Wireframes</h1>
        <ul className="list-disc pl-5 space-y-1">
          {files.map(file => (
            <li key={file}>
              <a
                href={`/Wireframes/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {file.replace('.html', '').replace(/-/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
