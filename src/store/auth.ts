import { create } from 'zustand'

export interface Course {
  id: string
  title: string
  completed: number
  total: number
  grade?: number
}

export interface AuthState {
  isLogged: boolean
  user: Record<string, unknown> | null
  token: string | null
  enrolledCourses: Course[]
  currentCourseId: string | null
  login: (user: Record<string, unknown>) => void
  logout: () => void
  enroll: (course: Course) => void
  completeModule: (courseId: string) => void
  finishCourse: (courseId: string, grade: number) => void
  setCurrentCourse: (courseId: string | null) => void
}

const useAuthStore = create<AuthState>(set => {
  const storedUser = localStorage.getItem('user')
  const initialUser = storedUser ? JSON.parse(storedUser) : null
  const storedToken = localStorage.getItem('token')
  const storedCourses = localStorage.getItem('enrolledCourses')
  const initialCourses: Course[] = storedCourses ? JSON.parse(storedCourses) : []
  const storedCourse = localStorage.getItem('currentCourseId')

  const persistCourses = (courses: Course[]) =>
    localStorage.setItem('enrolledCourses', JSON.stringify(courses))

  return {
    isLogged: !!initialUser && !!storedToken,
    user: initialUser,
    token: storedToken,
    enrolledCourses: initialCourses,
    currentCourseId: storedCourse,
    login: user => {
      const token = `token-${Date.now()}`
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
      set({ isLogged: true, user, token })
    },
    logout: () => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('currentCourseId')
      localStorage.removeItem('enrolledCourses')
      set({ isLogged: false, user: null, token: null, enrolledCourses: [], currentCourseId: null })
    },
    enroll: course =>
      set(state => {
        const updated = [...state.enrolledCourses, course]
        persistCourses(updated)
        return { enrolledCourses: updated }
      }),
    completeModule: courseId =>
      set(state => {
        const updated = state.enrolledCourses.map(c =>
          c.id === courseId && c.completed < c.total
            ? { ...c, completed: c.completed + 1 }
            : c,
        )
        persistCourses(updated)
        return { enrolledCourses: updated }
      }),
    finishCourse: (courseId, grade) =>
      set(state => {
        const updated = state.enrolledCourses.map(c =>
          c.id === courseId ? { ...c, grade } : c,
        )
        persistCourses(updated)
        return { enrolledCourses: updated }
      }),
    setCurrentCourse: courseId => {
      if (courseId) {
        localStorage.setItem('currentCourseId', courseId)
      } else {
        localStorage.removeItem('currentCourseId')
      }
      set({ currentCourseId: courseId })
    },
  }
})

export { useAuthStore }
