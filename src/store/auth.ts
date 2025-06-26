import { create } from 'zustand'

export interface Course {
  id: string
  title: string
  completed: number
  total: number
  grade?: number
  maxAttempts: number
  attempts: number
  lastAttempt?: number
  /** Map of completed class ids per module */
  classProgress: Record<string, string[]>
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
  completeClass: (
    courseId: string,
    moduleId: string,
    classId: string,
    totalClasses: number,
  ) => void
  finishCourse: (courseId: string, grade: number) => void
  setCurrentCourse: (courseId: string | null) => void
}

const useAuthStore = create<AuthState>(set => {
  const storedUser = localStorage.getItem('user')
  const initialUser = storedUser ? JSON.parse(storedUser) : null
  const storedToken = localStorage.getItem('token')
  const storedCourses = localStorage.getItem('enrolledCourses')
  const parsedCourses: Course[] = storedCourses ? JSON.parse(storedCourses) : []
  const initialCourses: Course[] = parsedCourses.map(c => ({
    ...c,
    maxAttempts: c.maxAttempts ?? 3,
    attempts: c.attempts ?? 0,
    lastAttempt: c.lastAttempt,
    classProgress: c.classProgress ?? {},
  }))
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
        const updated = [...state.enrolledCourses, {
          ...course,
          attempts: 0,
          lastAttempt: undefined,
          classProgress: {},
        }]
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
    completeClass: (courseId, moduleId, classId, totalClasses) =>
      set(state => {
        const updated = state.enrolledCourses.map(c => {
          if (c.id !== courseId) return c
          const moduleClasses = c.classProgress[moduleId] || []
          if (moduleClasses.includes(classId)) return c
          const newClasses = [...moduleClasses, classId]
          const newProgress = { ...c.classProgress, [moduleId]: newClasses }
          let completed = c.completed
          if (newClasses.length >= totalClasses && completed < c.total) {
            completed = completed + 1
          }
          return { ...c, classProgress: newProgress, completed }
        })
        persistCourses(updated)
        return { enrolledCourses: updated }
      }),
    finishCourse: (courseId, grade) =>
      set(state => {
        const now = Date.now()
        const updated = state.enrolledCourses.map(c => {
          if (c.id !== courseId) return c
          const attempts = (c.attempts ?? 0) + 1
          const result = { ...c, grade, attempts, lastAttempt: now }
          if (grade < 40 && attempts >= c.maxAttempts) {
            return null
          }
          return result
        }).filter(Boolean) as Course[]
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
