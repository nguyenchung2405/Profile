import {createSlice, current} from "@reduxjs/toolkit"

const initialState = {
    organization: []
}

const step4Slice = createSlice({
    name: "step4Slice",
    initialState,
    reducers: {
        setOrganization: (state, action)=>{
                state.organization = action.payload;
        },
        addOrganization: (state, action)=>{
            state.organization.push(action.payload)
        },
        removerOrganization: (state, action)=>{
            let index = state.organization.findIndex(organ => organ.id === action.payload)
            state.organization.splice(index, 1)
        },
        updateOrganizationSlice: (state, action)=>{
            let {id} = action.payload;
            let index = state.organization.findIndex(organ => organ.id === id);
            state.organization[index] = action.payload;
        }
    }
});

export const {setOrganization, addOrganization, removerOrganization,
updateOrganizationSlice} = step4Slice.actions;
export default step4Slice.reducer;