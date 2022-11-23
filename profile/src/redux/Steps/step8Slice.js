import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    familyRelationship: [],
    noiOHienTaiTinh: [],
    noiOHienTaiQuan: [],
    noiOHienTaiHuyen: [],
}

const step8Slice = createSlice({
    name: "step8Slice",
    initialState,
    reducers: {
        setNoiOHienTaiTinh: (state, action)=>{
            state.noiOHienTaiTinh = action.payload;
        },
        setNoiOHienTaiQuan: (state, action)=>{
            state.noiOHienTaiQuan = action.payload;
        },
        setNoiOHienTaiHuyen: (state, action)=>{
            let quanSelected = state.noiOHienTaiQuan.find(quan => quan.name === action.payload);
            state.noiOHienTaiHuyen = quanSelected.wards;
        }
    }
});

export const {setNoiOHienTaiTinh, setNoiOHienTaiQuan, setNoiOHienTaiHuyen} = step8Slice.actions;
export default step8Slice.reducer;