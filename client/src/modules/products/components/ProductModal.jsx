import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useProductModalStore from '../store/productModal.store';
import useProductStore from '../store/product.store';
import {useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import AddEditForm from './productModal/AddEditForm';
import ProductDetail from './productModal/ProductDetail';
import DeleteProduct from './productModal/DeleteProduct';
import { enqueueSnackbar } from 'notistack';

const ProductModal = () => {

    const [isLoading, setIsLoading] = useState(false)
    const isOpenModal = useProductModalStore(state => state.isOpenModal)
    const openModal = useProductModalStore(state => state.openModal)
    const typeModal = useProductModalStore(state => state.typeModal)
    const modalData = useProductModalStore(state => state.modalData)
    const addProductStore = useProductStore(state => state.addProduct)
    const editProductStore = useProductStore(state => state.editProduct)
    const deleteProductStore = useProductStore(state => state.deleteProduct)

    const fillFormData = () => {
        setFormData(prev => ({ ...prev, ...modalData }))
    }

    const [title, setTitle] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const initialState = {
        name: '',
        description: '',
        price: '',
        category_id: '',
        company_id: ''
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClose = () => {
        openModal(false)
    }

    useEffect(() => {
        const titles = {
            'ADD' : 'Añadir producto',
            'EDIT' : 'Editar producto',
            'DELETE' : 'Eliminar producto',
            'DETAIL' : 'Detalle del producto',
        }

        const title = titles[typeModal] || 'Producto'
        setTitle(title)

    }, [typeModal])

    useEffect(() => {
        if(typeModal == 'ADD') {
            setFormData(initialState)
        } else {
            fillFormData()
            setIsEdit(true)
        }

    },[isOpenModal, modalData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const actions = {
            'ADD' : () => addProductStore(formData),
            'EDIT' : () => editProductStore(formData),
            'DELETE' : () => deleteProductStore(formData.id),
        }

        const action = actions[typeModal]
        if(action) {
            const result = await action()
            if (typeModal !== 'DETAIL') {
                enqueueSnackbar(result.message, {
                    autoHideDuration: 1500,
                    variant: result.status === 200 ? 'success' : 'warning'
                });
            }
        }
        setIsLoading(false)
        handleClose()
    }


    return (
        <Modal show={isOpenModal} onHide={handleClose} centered>
            <Modal.Header className='justify-content-center'>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {typeModal === "ADD" && <AddEditForm formData={formData} handleChange={handleChange}/>}
                    {typeModal === "EDIT" && isEdit && <AddEditForm formData={formData} handleChange={handleChange}/>}
                    {typeModal === "DELETE" && isEdit && <DeleteProduct formData={formData}/>}
                    {typeModal === "DETAIL" && isEdit && <ProductDetail/>}
                </Modal.Body>
                <Modal.Footer>
                    {
                        typeModal != 'DETAIL' && (
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                        )
                    }
                    <Button
                        variant="primary"
                        type='submit'
                        disabled={isLoading}
                    >
                        {
                            isLoading
                                ? 'Procesando...'
                                : 'Aceptar'
                        }
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ProductModal