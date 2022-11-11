import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    personal_history: []
}

const step2Slice = createSlice({
    name: "step2Slice",
    initialState,
    reducers: {
        setPersonalHistory: (state, action)=>{
            state.personal_history = action.payload;
        }
    }
})

export const {setPersonalHistory} = step2Slice.actions;
export default step2Slice.reducer;