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
        },
        setDataParty: (state, action)=>{
            state.party[0] = {...action.payload}
        }
    }
})

export const {getParty, clearParty, setDataParty} = step3Slice.actions;
export default step3Slice.reducer;