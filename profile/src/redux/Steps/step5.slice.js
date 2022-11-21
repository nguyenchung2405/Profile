import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    trainingFostering: [],

}

const step5Slice = createSlice({
    name: "step5Slice",
    initialState,
    reducers: {
        setTrainingFostering: (state, action)=>{
            state.trainingFostering = action.payload;
        },
        addTrainingFostering: (state, action)=>{
            state.trainingFostering.push(action.payload)
        },
        removeTrainingFostering: (state, action)=>{
            let index = state.trainingFostering.findIndex(organ => organ.id === action.payload)
            state.trainingFostering.splice(index, 1)
        },
        updateTrainingFosteringSlice: (state, action)=>{
            let {id} = action.payload;
            let index = state.trainingFostering.findIndex(organ => organ.id === id);
            state.trainingFostering[index] = action.payload;
        }
    }
})

export const {setTrainingFostering, addTrainingFostering, removeTrainingFostering,
updateTrainingFosteringSlice} = step5Slice.actions;
export default step5Slice.reducer;