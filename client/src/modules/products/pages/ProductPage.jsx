import LogOutButton from "../components/LogOutButton"
import ProductList from "../components/ProductList"
import AddProductButton from "../components/AddProductButton"
import ProductModal from "../components/ProductModal"
import useProductStore from "../store/product.store"
import { useEffect } from "react"

const ProductPage = () => {

    const getAllCompanies = useProductStore(state => state.getAllCompanies)
    const getAllCategories = useProductStore(state => state.getAllCategories)

    useEffect(() => {
        const fetchCompaniesCategories = async () => {
            await getAllCompanies()
            await getAllCategories()
        }
        fetchCompaniesCategories()
    }, [])

    return (
        <>
            <div className="container">
                <LogOutButton />
                <AddProductButton />
                <h2 className="title text-center my-5"> Productos </h2>
                <ProductList />
            </div>
            <ProductModal />
        </>
    )
}

export default ProductPage