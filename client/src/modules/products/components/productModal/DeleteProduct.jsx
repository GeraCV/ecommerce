const DeleteProduct = ({formData}) => {
    return (
        <p className="text-center my-3">
            ¿Estás seguro que deseas eliminar el producto
            <span className="fw-bold"> {formData.name}</span>
            ?
        </p>
    )
}

export default DeleteProduct