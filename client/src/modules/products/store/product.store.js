import { create } from "zustand";

const useProductStore = create((set, get) => ({
    products: [],
    detailProducts: [],
    detailOnlyProduct: {},
    categories: [],
    companies: [],
    getAllProducts: async () => {
        try {
            const request = await fetch('http://localhost:3000/products', {
                credentials: 'include'
            })
            const response = await  request.json()
            if(request.status === 200) {
                const data = response.data
                set({products: data})
            }
        } catch (error) {
            console.error(error)
        }
    },
    getAllCompanies: async () => {
        try {
            const request = await fetch('http://localhost:3000/companies',{
                credentials: 'include'
            })
            const response = await  request.json()
            if(request.status === 200) {
                const data = response.data
                set({companies: data})
            }
        } catch (error) {
            console.error(error)
        }
    },
    getAllCategories: async () => {
        try {
            const request = await fetch('http://localhost:3000/categories',{
                credentials: 'include'
            })
            const response = await  request.json()
            if(request.status === 200) {
                const data = response.data
                set({categories: data})
            }

        } catch (error) {
            console.error(error)
        }
    },
    addProduct: async (formData) => {
        try {
            const request = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            })
            const response = await  request.json()
            if(request.status === 200) {
                const data = response.data
                set({products: [...get().products, data]})
            }
            return {status: request.status, message: response.message}
        } catch(error){
            console.error(error)
            return {
                status: 500,
                message: 'Error al procesar la solicitud. Contacta al administrador.'
            }
        }
    },
    editProduct: async (formData) => {
        try {
            const {id, ...form} = formData
            const request = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(form),
                credentials: 'include'
            })
            const response = await request.json()
            if(request.status === 200) {
                const data  = response.data
                set({
                    products: get().products.map((product) =>
                        product.id === data.id ? data : product
                    )
                })

                set({
                    detailProducts: get().detailProducts.filter((product) =>
                        product.id != data.id
                    )
                })

            }
            return {status: request.status, message: response.message}
        } catch (error) {
            console.error(error)
            return {
                status: 500,
                message: 'Error al procesar la solicitud. Contacta al administrador.'
            }
        }
    },
    deleteProduct: async (id) => {
        try {
            const request = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            const response = await request.json()

            if(request.status === 200) {
                set({
                    products: get().products.filter((product) =>
                        product.id != id
                    )
                })
            }
            return {status: request.status, message: response.message}
        } catch (error) {
            console.error(error)
            return {
                status: 500,
                message: 'Error al procesar la solicitud. Contacta al administrador.'
            }
        }
    },
    getProductDetail: async (id) => {
        try {

            const product = get().detailProducts.find(product =>
                product.id == id
            )
            if(product) {
                set({detailOnlyProduct: product})
            } else {
                    const request = await fetch(`http://localhost:3000/products/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-type' : 'application/json'
                        },
                        credentials: 'include'
                    })
                    const response = await  request.json()
                    if(request.status === 200) {
                        const data  = response.data
                        set({detailProducts: [...get().detailProducts, data]})
                        set({detailOnlyProduct: data})
                    }
            }

        } catch (error) {
            console.error(error)
        }
    },
    reset: () => set({
        products: [],
        detailProducts: [],
        detailOnlyProduct: {},
        categories: [],
        companies: []
    })

}))

export default useProductStore