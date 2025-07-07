import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import type { ForumPost } from '../data/forum'
import { sampleForumPosts } from '../data/forum'
import { useAuthStore } from '../store/auth'
import {
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/solid'

export default function Forum() {
  const [posts, setPosts] = useState<ForumPost[]>(sampleForumPosts)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [courseId, setCourseId] = useState(courses[0]?.id ?? '')
  const isLogged = useAuthStore(state => state.isLogged)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) return
    const newPost: ForumPost = {
      id: Date.now().toString(),
      course: courseId,
      author: 'Estudiante',
      title,
      date: new Date().toISOString(),
      content,
      replies: [],
    }
    setPosts([newPost, ...posts])
    setTitle('')
    setContent('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-grow p-4 space-y-8">
        <h1 className="text-5xl font-bold text-center">Foro de la comunidad</h1>

        <section className="bg-gray-100 dark:bg-gray-800 p-4 rounded space-y-4">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <PencilSquareIcon className="w-6 h-6" /> Nueva publicación
          </h2>
          {isLogged ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <select
                value={courseId}
                onChange={e => setCourseId(e.target.value)}
                className="border p-2 rounded text-base text-gray-800"
              >
                {courses.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
              <input
                className="border p-2 rounded"
                placeholder="Título"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
              <textarea
                className="border p-2 rounded"
                placeholder="¿Cuál es tu duda?"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              />
              <input type="file" multiple className="border p-2 rounded" />
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 rounded bg-primary text-white self-start"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
                <span className="sr-only">Publicar</span>
              </button>
            </form>
          ) : (
            <div className="flex flex-col gap-2">
              <p>No puedes realizar una publicación si no iniciaste sesión.</p>
              <a
                href="/login"
                className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white w-max"
              >
                Inicia sesión para hacer una nueva consulta
              </a>
            </div>
          )}
        </section>

        <section className="space-y-4">
          {posts.map(post => (
            <article key={post.id} className="border rounded-card p-card shadow-card bg-white space-y-2">
              <header className="flex justify-between items-center">
                <h3 className="font-semibold">{post.title}</h3>
                <span className="text-base text-gray-500">
                  {new Date(post.date).toLocaleString()}
                </span>
              </header>
              <p className="text-base">{post.content}</p>
              <div className="text-base flex items-center gap-1 text-gray-500">
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                {post.replies.length} respuestas
                <button className="ml-auto flex items-center gap-1 text-gray-500 text-base" aria-label="Me gusta">
                  <HandThumbUpIcon className="w-4 h-4" /> {post.likes ?? 0}
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
