import useAuthStore from "../store/auth.store"

const useAuthSession = () => {

    const setIsLoggedStore = useAuthStore(state => state.setIsLogged)
    const setUserDataStore = useAuthStore(state => state.setUserData)

    const checkSession = async () => {
        try {
            const request = await fetch('http://localhost:3000/auth/session', {
                credentials: 'include'
            })

            const response = await request.json()
            if(request.status == 200) {
                setUserDataStore(response.data)
                setIsLoggedStore(true)
            } else {
                console.error(response.message)
                 setIsLoggedStore(false)
            }

        } catch (error) {
            console.error(error)
            setIsLoggedStore(false)
        }
    }

    return {checkSession}
}

export default useAuthSession