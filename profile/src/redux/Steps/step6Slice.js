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
        },
        addRewardDiscipline: (state, action)=>{
            state.rewardDiscipline.push(action.payload)
        },
        removeRewardDiscipline: (state, action)=>{
            let index = state.rewardDiscipline.findIndex(re_dis => re_dis.id === action.payload)
            state.rewardDiscipline.splice(index, 1)
        },
        updateRewardDisciplineSlice: (state, action)=>{
            let {id} = action.payload;
            let index = state.rewardDiscipline.findIndex(re_dis => re_dis.id === id);
            state.rewardDiscipline[index] = action.payload;
        }
    }
})

export const {setRewardDiscipline, addRewardDiscipline, removeRewardDiscipline, 
updateRewardDisciplineSlice} = step6Slice.actions;
export default step6Slice.reducer;