export interface ForumReply {
  id: string
  author: string
  date: string
  content: string
}

export interface ForumPost {
  id: string
  course: string
  author: string
  title: string
  date: string
  content: string
  replies: ForumReply[]
}

export const sampleForumPosts: ForumPost[] = [
  {
    id: '1',
    course: 'html-css',
    author: 'Ana',
    title: 'Duda con selectores CSS',
    date: '2025-05-12T10:00:00Z',
    content: 'No entiendo bien cuando usar > versus espacio en un selector. ¿Alguna recomendación?',
    replies: [
      {
        id: 'r1',
        author: 'Asesor Luis',
        date: '2025-05-12T12:00:00Z',
        content: 'Hola Ana, el selector > aplica solo a hijos directos mientras que el espacio selecciona cualquier descendiente.',
      },
    ],
  },
  {
    id: '2',
    course: 'react',
    author: 'Marcos',
    title: 'Problema con useEffect',
    date: '2025-05-13T09:30:00Z',
    content: 'Mi componente entra en bucle infinito al usar useEffect. ¿Qué debería revisar?',
    replies: [
      {
        id: 'r2',
        author: 'Asesora Sofía',
        date: '2025-05-13T10:00:00Z',
        content: 'Revisa el arreglo de dependencias, probablemente estés incluyendo una variable que cambia en cada render.',
      },
      {
        id: 'r3',
        author: 'Juan',
        date: '2025-05-13T11:15:00Z',
        content: 'También puedes usar un booleano para controlar cuándo ejecutar el efecto.',
      },
    ],
  },
]
