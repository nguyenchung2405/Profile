import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tableDepList: [],
    total: ""
}

const tableDepListSlice = createSlice({
    name: "tableDepListSlice",
    initialState,
    reducers: {
        setDepList: (state,action)=>{
            let {tableList, total} = action.payload;
            state.tableDepList = tableList;
            state.total = total;
        }
    }
});

export const {setDepList} = tableDepListSlice.actions;
export default tableDepListSlice.reducer;