import { Outlet, Navigate } from "react-router-dom"
import useAuthStore from "../../auth/store/auth.store"

const ProtectedRoute = ({path = '/'}) => {

    const isLoggedStore = useAuthStore(state => state.isLogged)

    if (isLoggedStore === null) return null

    if(!isLoggedStore) {
        return <Navigate to={path} replace />
    }

    return <Outlet />

}

export default ProtectedRoute