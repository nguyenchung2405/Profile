import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    permissionList: [],
    total: 0,
    messageAlert: {type: "", msg:""}
};

const permissionSlice = createSlice({
    name: "permissionSlice",
    initialState,
    reducers: {
        setPermissionList: (state, action)=>{
            state.permissionList = action.payload.dataResponse;
            state.total = action.payload.total;
        },
        setMessageAlert: (state, action)=>{
            state.messageAlert = action.payload;
        },
        addPermission: (state, action)=>{
            state.permissionList.unshift(action.payload)
        },
        updatePermissionSlice: (state, action)=>{
            let {id} = action.payload;
            let index = state.permissionList.findIndex(per => per.id === id);
            state.permissionList[index] = action.payload
        },
        deletePermissionSlice: (state, action)=>{
            let {id} = action.payload;
            let index = state.permissionList.findIndex(per => per.id === id);
            state.permissionList.splice(index, 1)
        }
    }
});

export const {setPermissionList, setMessageAlert, addPermission,
updatePermissionSlice, deletePermissionSlice} = permissionSlice.actions;
export default permissionSlice.reducer;