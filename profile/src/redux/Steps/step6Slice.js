import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    rewardDiscipline: [],

}

const step6Slice = createSlice({
    name: "step6Slice",
    initialState,
    reducers: {
        setRewardDiscipline: (state, action)=>{
            state.rewardDiscipline = action.payload;
        }
    }
})

export const {setRewardDiscipline} = step6Slice.actions;
export default step6Slice.reducer;