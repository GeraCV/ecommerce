import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import useAuthStore from '../store/auth.store.js';
import { useNavigate  } from 'react-router-dom';

const LogInPage = () => {

    const navigate = useNavigate()
    const setUserData = useAuthStore(state => state.setUserData)
    const setIsLogged = useAuthStore(state => state.setIsLogged)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSignInForm  = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const submitSignInForm = async (e) => {
        e.preventDefault()

        const request = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })

        const response = await request.json()
        if(request.status == 200) {
            setUserData(response.data)
            setIsLogged(true)
            navigate('/products')
        }

    }

    return (
        <div className="wrapper-main-container">
            <div className="main-container">
                <h2 className="text-center mb-5"> Iniciar sesión </h2>
                <Form onSubmit={submitSignInForm}>
                    <Form.Group className="mb-3" controlId="emailSignIn">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="usuario@ejemplo.com"
                            name='email'
                            value={formData.email}
                            onChange={handleSignInForm}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordSingIn">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleSignInForm}
                        />
                    </Form.Group>
                    <Button
                        className="w-100 mt-4"
                        variant="primary"
                        type="submit"
                        >
                        Ingresar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LogInPage