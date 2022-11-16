import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    party: []
}

const step3Slice = createSlice({
    name: "step3Slice",
    initialState,
    reducers: {
        getParty: (state, action)=>{
            if(action.payload.length > 0){
                state.party = action.payload;
            }
        },
        clearParty: (state)=>{
            state.party = []
        }
    }
})

export const {getParty, clearParty} = step3Slice.actions;
export default step3Slice.reducer;