import useAuthStore from "../../auth/store/auth.store"
import useProductStore from "../../products/store/product.store"
import useProductModalStore from "../../products/store/productModal.store"

const resetStores = () => {
    useAuthStore.getState().reset()
    useProductStore.getState().reset()
    useProductModalStore.getState().reset()
}

export default resetStores