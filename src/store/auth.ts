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
  login: (user: Record<string, unknown>) => void
  logout: () => void
  enroll: (course: Course) => void
  completeModule: (courseId: string) => void
}

const useAuthStore = create<AuthState>((set) => {
  const stored = localStorage.getItem('user')
  const initialUser = stored ? JSON.parse(stored) : null

  return {
    isLogged: !!initialUser,
    user: initialUser,
    enrolledCourses: [],
    login: (user) => {
      localStorage.setItem('user', JSON.stringify(user))
      set({ isLogged: true, user })
    },
    logout: () => {
      localStorage.removeItem('user')
      set({ isLogged: false, user: null, enrolledCourses: [] })
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
  }
})

export { useAuthStore }
