import { create } from 'zustand'

export interface Course {
  id: string
  title: string
  completed: number
  total: number
}

export interface AuthState {
  isLogged: boolean
  user: Record<string, unknown> | null
  enrolledCourses: Course[]
  currentCourseId: string | null
  login: (user: Record<string, unknown>) => void
  logout: () => void
  enroll: (course: Course) => void
  completeModule: (courseId: string) => void
  setCurrentCourse: (courseId: string | null) => void
}

const useAuthStore = create<AuthState>((set) => {
  const stored = localStorage.getItem('user')
  const initialUser = stored ? JSON.parse(stored) : null
  const storedCourse = localStorage.getItem('currentCourseId')

  return {
    isLogged: !!initialUser,
    user: initialUser,
    enrolledCourses: [],
    currentCourseId: storedCourse,
    login: (user) => {
      localStorage.setItem('user', JSON.stringify(user))
      set({ isLogged: true, user })
    },
    logout: () => {
      localStorage.removeItem('user')
      localStorage.removeItem('currentCourseId')
      set({ isLogged: false, user: null, enrolledCourses: [], currentCourseId: null })
    },
    enroll: course =>
      set(state => ({ enrolledCourses: [...state.enrolledCourses, course] })),
    completeModule: courseId =>
      set(state => ({
        enrolledCourses: state.enrolledCourses.map(c =>
          c.id === courseId && c.completed < c.total
            ? { ...c, completed: c.completed + 1 }
            : c,
        ),
      })),
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
