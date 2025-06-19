import Button from 'react-bootstrap/Button';
import { useNavigate  } from 'react-router-dom';
import resetStores from '../../core/utils/resetStores';

const LogOutButton = () => {

    const navigate = useNavigate()

    const logOutSession = async (e) => {
        e.preventDefault()

        const request = await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
            credentials: 'include'
        })

        if(request.status == 200) {
            resetStores()
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