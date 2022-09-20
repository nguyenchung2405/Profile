import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowModal: false,
    isShowModal2: false,
};

const ModalSlice = createSlice({
    name: "ModalSlice",
    initialState,
    reducers: {
        showModal: (state)=>{
            state.isShowModal = !state.isShowModal;
        },
        showModal2: (state)=>{
            state.isShowModal2 = !state.isShowModal2;
        }
    }
})

export const {showModal, showModal2} = ModalSlice.actions;

export default ModalSlice.reducer;