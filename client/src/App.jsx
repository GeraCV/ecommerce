import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/styles.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LogInPage from "./modules/auth/pages/LogInPage"
import ProtectedRoute from "./modules/core/components/ProtectedRoute"
import ProductPage from "./modules/products/pages/ProductPage"
import { useEffect } from "react"
import useAuthSession from "./modules/auth/hooks/useAuthSession"

function App() {

    const { checkSession } = useAuthSession()

    useEffect(() => {
        checkSession()
    },[checkSession])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/login'/>}/>
                    <Route path='/login' element={<LogInPage />}/>
                    <Route element={<ProtectedRoute />}>
                        <Route  path='/products' element={<ProductPage />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
