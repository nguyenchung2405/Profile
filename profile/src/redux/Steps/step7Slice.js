import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    familyRelaStep7: [],
    queQuanTinh: [],
    queQuanQuan: [],
    queQuanHuyen: [],
    diaChiTinh: [],
    diaChiQuan: [],
    diaChiHuyen: [],
}

const step7Slice = createSlice({
    name: "step7Slice",
    initialState,
    reducers: {
        setQueQuanTinh_ST7: (state, action)=>{
            state.queQuanTinh = action.payload;
        },
        setQueQuanQuan_ST7: (state, action)=>{
            state.queQuanQuan = action.payload;
        },
        setQueQuanHuyen_ST7: (state, action)=>{
            let quanSelected = state.queQuanQuan.find(quan => quan.name === action.payload);
            state.queQuanHuyen = quanSelected.wards;
        },
        setDiaChiTinh_ST7: (state, action)=>{
            state.diaChiTinh = action.payload;
        },
        setDiaChiQuan_ST7: (state, action)=>{
            state.diaChiQuan = action.payload;
        },
        setDiaChiHuyen_ST7: (state, action)=>{
            let quanSelected = state.diaChiQuan.find(quan => quan.name === action.payload);
            state.diaChiHuyen = quanSelected.wards;
        },
    }
});

export const {setQueQuanTinh_ST7,setQueQuanQuan_ST7,setQueQuanHuyen_ST7,
setDiaChiTinh_ST7, setDiaChiQuan_ST7, setDiaChiHuyen_ST7} = step7Slice.actions;
export default step7Slice.reducer;