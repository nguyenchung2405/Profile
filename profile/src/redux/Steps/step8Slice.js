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
        },
        setFamilyRelationship: (state, action)=>{
            state.familyRelationship = action.payload;
        },
        addFamilyRelationship: (state, action)=>{
            state.familyRelationship.push(action.payload)
        },
        updateFamilyRelationshipSlice: (state, action)=>{
            let {id} = action.payload;
            // console.log(action.payload)
            let index = state.familyRelationship.findIndex(fa_re => fa_re.id === id);
            state.familyRelationship[index] = action.payload;
            // console.log("cập nhật xong")
        }
    }
});

export const {setNoiOHienTaiTinh, setNoiOHienTaiQuan, setNoiOHienTaiHuyen,
setFamilyRelationship, addFamilyRelationship, updateFamilyRelationshipSlice} = step8Slice.actions;
export default step8Slice.reducer;