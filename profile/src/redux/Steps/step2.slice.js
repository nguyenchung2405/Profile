import { createSlice, current } from "@reduxjs/toolkit"

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
        },
        updatePersonalHistory: (state, action)=>{
            let {id} = action.payload;
            let index = state.personal_history.findIndex(ph => ph.id === id);
            state.personal_history[index] = action.payload;
        }
    }
})

export const { setPersonalHistory, addPersonalHistory,
    removePersonalHistory, updatePersonalHistory } = step2Slice.actions;
export default step2Slice.reducer;