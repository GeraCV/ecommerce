import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: null,
    userData: {},
    setUserData: (data) => set({userData : data}),
    setIsLogged: (bool) => set({isLogged : bool}),
    reset: () => set({ isLogged: false, userData: null })
}))

export default useAuthStore