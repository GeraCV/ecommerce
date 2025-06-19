import Button from "react-bootstrap/Button"
import useProductModalStore from "../store/productModal.store"
import useProductStore from "../store/product.store"

const ListItem = ({id, product_name, price, user_name, created_at, category_id, company_id, description}) => {

    const setTypeModal = useProductModalStore(state => state.setTypeModal)
    const openModal = useProductModalStore(state => state.openModal)
    const getProductDetail = useProductStore(state => state.getProductDetail)

    const setProductModal = (type) => {

        let data = type != 'ADD'
            ? {id, name: product_name, price, category_id, company_id, description}
            : null

            if(type == 'DETAIL') {
                getProductDetail(id)
            }
        openModal(true, data)
        setTypeModal(type)
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{product_name}</td>
            <td>$ {price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            <td>{user_name}</td>
            <td>{created_at}</td>
            <td>
                <div className="d-flex gap-4 justify-content-center">
                    <Button
                        variant="info"
                        onClick={() => setProductModal('DETAIL')}
                    >
                        Más información
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => setProductModal('EDIT')}
                    >
                        Editar
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => setProductModal('DELETE')}
                    >
                        Eliminar
                    </Button>
                </div>
            </td>
        </tr>
    )
}

export default ListItem