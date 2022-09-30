import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    nextStep: 0,
    isNextStep: false,
}

const stepsSlice = createSlice({
    name: "stepsSlice",
    initialState,
    reducers: {
        moveToNextStep: (state,action)=>{
            state.nextStep = action.payload;
        },
        setIsNextStep: (state,action)=>{
            state.isNextStep = action.payload;
        }
    }
});

export const {moveToNextStep, setIsNextStep} = stepsSlice.actions;
export default stepsSlice.reducer;