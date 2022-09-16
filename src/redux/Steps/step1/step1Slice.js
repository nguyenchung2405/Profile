import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    phongBanChucVuArr: [],
}

const step1Slice = createSlice({
    name: "step1",
    initialState,
    reducers: {
        addPBCV: (state,action)=>{
            let {payload} = action;
            console.log("reducer",payload)
            if(payload.chucVu === "" || payload.phongBan ===""){
                return
            }
            state.phongBanChucVuArr.push(action.payload)
        }
    }
})

export const {addPBCV} = step1Slice.actions;

export default step1Slice.reducer;