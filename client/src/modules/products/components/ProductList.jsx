import { useEffect } from "react"
import useProductStore from "../store/product.store"
import Table from 'react-bootstrap/Table';
import ListItem from "./ListItem";

const ProductList = () => {

    const productsStore = useProductStore(state => state.products)
    const getAllProductsStore = useProductStore(state => state.getAllProducts)

    useEffect(() => {
        const getAllProducts = async () => {
            await getAllProductsStore()
        }

        getAllProducts()
    }, [getAllProductsStore])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Usuario</th>
                    <th>Fecha de creación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productsStore.length
                        ? (
                            productsStore.map(({id, product_name, price, user_name,created_at, category_id, company_id, description}) => (
                                <ListItem
                                    key={id}
                                    id={id}
                                    product_name={product_name}
                                    price={price}
                                    user_name={user_name}
                                    created_at={created_at}
                                    category_id={category_id}
                                    company_id={company_id}
                                    description={description}
                                />
                            ))
                        )
                        : (
                            <tr>
                                <td colSpan={6} className="text-center"> No se encontraron resultados</td>
                            </tr>
                        )
                }
            </tbody>
        </Table>
    )

}

export default ProductList