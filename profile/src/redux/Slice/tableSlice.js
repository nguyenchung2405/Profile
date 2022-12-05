import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    depList: [],
    posList: []
}

const tableSlice = createSlice({
    name: "tableSlice",
    initialState,
    reducers: {
        setDepList: (state, action)=>{
            state.depList = action.payload;
        },
        setPosList: (state, action)=>{
            state.posList = action.payload;
        }
    }
});

export const {setDepList, setPosList} = tableSlice.actions;
export default tableSlice.reducer;