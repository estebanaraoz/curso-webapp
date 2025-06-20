import { create } from 'zustand'

export interface AuthState {
  isLogged: boolean
  user: Record<string, unknown> | null
  login: (user: Record<string, unknown>) => void
  logout: () => void
}

const useAuthStore = create<AuthState>((set) => {
  const stored = localStorage.getItem('user')
  const initialUser = stored ? JSON.parse(stored) : null

  return {
    isLogged: !!initialUser,
    user: initialUser,
    login: (user) => {
      localStorage.setItem('user', JSON.stringify(user))
      set({ isLogged: true, user })
    },
    logout: () => {
      localStorage.removeItem('user')
      set({ isLogged: false, user: null })
    },
  }
})

export { useAuthStore }
