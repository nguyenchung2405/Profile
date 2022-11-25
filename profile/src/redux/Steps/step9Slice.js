import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    noiOHienTaiTinh: [],
    noiOHienTaiQuan: [],
    noiOHienTaiHuyen: [],
}

const step9Slice = createSlice({
    name: "step9Slice",
    initialState,
    reducers: {
        setNoiOHienTaiTinh_ST9: (state, action)=>{
            state.noiOHienTaiTinh = action.payload;
        },
        setNoiOHienTaiQuan_ST9: (state, action)=>{
            state.noiOHienTaiQuan = action.payload;
        },
        setNoiOHienTaiHuyen_ST9: (state, action)=>{
            let quanSelected = state.noiOHienTaiQuan.find(quan => quan.name === action.payload);
            state.noiOHienTaiHuyen = quanSelected.wards;
        }
    }
});

export const {setNoiOHienTaiTinh_ST9, setNoiOHienTaiQuan_ST9, setNoiOHienTaiHuyen_ST9} = step9Slice.actions;
export default step9Slice.reducer;