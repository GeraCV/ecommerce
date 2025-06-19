import Form from 'react-bootstrap/Form';
import useProductStore from '../../store/product.store';

const AddEditForm = ({formData, handleChange}) => {
    const companies = useProductStore(state => state.companies)
    const categories = useProductStore(state => state.categories)

    return (
        <>
            <Form.Group className="mb-3" controlId="name-product">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description-product">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                    type="text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description-product">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    name="price"
                    onChange={handleChange}
                    value={formData.price.replace(/,/g, '')}
                    type="number"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Compañia</Form.Label>
                <Form.Select
                    name="company_id"
                    onChange={handleChange}
                    value={formData.company_id}
                >
                    <option value="0"> Elige una compañia</option>
                    {
                        companies.map(({id, name}) => (
                            <option
                                key={id}
                                value={id}
                            >
                                {name}
                            </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <Form.Select
                    name="category_id"
                    onChange={handleChange}
                    value={formData.category_id}
                >
                    <option value="0"> Elige una categoría</option>
                    {
                        categories.map(({id, name}) => (
                            <option
                                key={id}
                                value={id}
                            >
                                {name}
                            </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default AddEditForm