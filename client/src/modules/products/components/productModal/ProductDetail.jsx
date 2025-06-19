import useProductStore from "../../store/product.store"
import Badge from 'react-bootstrap/Badge';

const ProductDetail = () => {

    const detailOnlyProductStore = useProductStore(state => state.detailOnlyProduct)

    return (
        <div>
            <p>
                <span className="fw-semibold">Id</span> :
                {detailOnlyProductStore.id}
            </p>
            <p>
                <span className="fw-semibold">Compañía</span> :
                <Badge bg="success ms-2">
                    {detailOnlyProductStore.company_name}
                </Badge>
            </p>
            <p>
                <span className="fw-semibold">Categoría</span> :
                <Badge bg="primary ms-2">
                    {detailOnlyProductStore.category_name}
                </Badge>
            </p>
            <p>
                <span className="fw-semibold">Descripción</span> : {detailOnlyProductStore.description}
            </p>
        </div>
    )
}

export default ProductDetail