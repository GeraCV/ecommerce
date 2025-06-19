import { create } from "zustand";

const useProductModalStore = create((set) => ({
    isOpenModal : false,
    modalData: null,
    typeModal: null,
    openModal: (status, data = null) =>
        set({isOpenModal: status, modalData: data }),
    closeModal: () => set({isOpenModal: false}),
    setTypeModal: (type) => set({typeModal: type})
}))

export default useProductModalStore