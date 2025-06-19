import Button from "react-bootstrap/Button"
import useProductModalStore from "../store/productModal.store"


const AddProductButton = () => {
    const openModal = useProductModalStore(state => state.openModal)
    const setTypeModal = useProductModalStore(state => state.setTypeModal)
    const showModal = () => {
        openModal(true)
        setTypeModal('ADD')
    }
     return (
        <div className="add-product-button-container text-end">
            <Button
                variant="primary"
                onClick={showModal}
            >
                Añadir producto
            </Button>
        </div>
    )
}

export default AddProductButton