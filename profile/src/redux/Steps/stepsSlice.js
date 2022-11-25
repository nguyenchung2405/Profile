import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    nextStep: 0,
    isNextStep: false,
    user_profile_id: {},
    messageAlert: {},
    isDone: false
}

const stepsSlice = createSlice({
    name: "stepsSlice",
    initialState,
    reducers: {
        moveToNextStep: (state, action) => {
            state.nextStep = action.payload;
        },
        setIsNextStep: (state, action) => {
            state.isNextStep = action.payload;
        },
        setUserProfileID: (state, action) => {
            state.user_profile_id = action.payload;
        },
        setMessageAlert: (state, action) => {
            state.messageAlert = action.payload;
        },
        setIsDone: (state, action)=>{
            state.isDone = action.payload;
        }
    }
});

export const { moveToNextStep, setIsNextStep, setUserProfileID, setMessageAlert,
    setIsDone } = stepsSlice.actions;
export default stepsSlice.reducer;