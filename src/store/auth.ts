import { create } from 'zustand'

export interface Course {
  id: string
  title: string
  progress: string
}

export interface AuthState {
  isLogged: boolean
  user: Record<string, unknown> | null
  enrolledCourses: Course[]
  login: (user: Record<string, unknown>) => void
  logout: () => void
  enroll: (course: Course) => void
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
  }
})

export { useAuthStore }
