import {createSlice, current} from "@reduxjs/toolkit"
import { mappingFamilyRelationship } from "../../ultils/mapping";

const initialState = {
    familyRelationship: [],
    noiOHienTaiTinh: [],
    noiOHienTaiQuan: [],
    noiOHienTaiHuyen: [],
    familyRelationshipExist: false,
    isCreated: false
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
            state.familyRelationship = mappingFamilyRelationship(state.familyRelationship)
            state.familyRelationshipExist = true;
            state.isCreated = true;
        },
        updateFamilyRelationshipSlice: (state, action)=>{
            let {id} = action.payload;
            let index = state.familyRelationship.findIndex(fa_re => fa_re.id === id);
            state.familyRelationship[index] = action.payload;
            // console.log("cập nhật xong")
        },
        setFamilyRelationshipExist: (state, action)=>{
            state.familyRelationshipExist = action.payload;
        }
    }
});

export const {setNoiOHienTaiTinh, setNoiOHienTaiQuan, setNoiOHienTaiHuyen,
setFamilyRelationship, addFamilyRelationship, updateFamilyRelationshipSlice,
setFamilyRelationshipExist} = step8Slice.actions;
export default step8Slice.reducer;