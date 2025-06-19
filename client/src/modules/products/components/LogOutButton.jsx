import Button from 'react-bootstrap/Button';
import { useNavigate  } from 'react-router-dom';
import useAuthStore from '../../auth/store/auth.store';

const LogOutButton = () => {

    const navigate = useNavigate()
    const setUserData = useAuthStore(state => state.setUserData)
    const setIsLogged = useAuthStore(state => state.setIsLogged)

    const logOutSession = async (e) => {
        e.preventDefault()

        const request = await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
            credentials: 'include'
        })

        if(request.status == 200) {
            setUserData({})
            setIsLogged(false)
            navigate('/login')
        }
    }

    return (
        <div className='btn-logout-container text-end my-4'>
            <Button
                onClick={logOutSession}
                variant="outline-danger"
            >
                Cerrar sesión
            </Button>
        </div>
    )
}

export default LogOutButton