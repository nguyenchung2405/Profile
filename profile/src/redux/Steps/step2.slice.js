import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    personal_history: []
}

const step2Slice = createSlice({
    name: "step2Slice",
    initialState,
    reducers: {
        setPersonalHistory: (state, action) => {
            state.personal_history = action.payload;
        },
        addPersonalHistory: (state, action) => {
            state.personal_history.push(action.payload)
        },
        removePersonalHistory: (state, action) => {
            let index = state.personal_history.findIndex(ph => ph.id === action.payload)
            state.personal_history.splice(index, 1)
        }
    }
})

export const { setPersonalHistory, addPersonalHistory,
    removePersonalHistory } = step2Slice.actions;
export default step2Slice.reducer;