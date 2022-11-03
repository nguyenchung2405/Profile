import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tableDepList: [],
    total: "",
    depInfor: {note: "", parent_id: null},
}

const tableDepListSlice = createSlice({
    name: "tableDepListSlice",
    initialState,
    reducers: {
        setDepList: (state,action)=>{
            let {tableList, total} = action.payload;
            state.tableDepList = tableList;
            state.total = total;
        },
        setDepInfor: (state,action)=>{
            let data = action.payload;
            state.depInfor = data;
        }
    }
});

export const {setDepList, setDepInfor} = tableDepListSlice.actions;
export default tableDepListSlice.reducer;