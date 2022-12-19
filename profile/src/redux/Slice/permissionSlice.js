import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    permissionList: [],
    total: 0,
    messageAlert: {type: "", msg:""},
    tableManagement: [],
    permissionHave: [],
    permissionNot: [],
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
        },
        setTableManagement: (state, action)=>{
            state.tableManagement = action.payload;
        },
        setPermissionHave: (state, action)=>{
            state.permissionHave = action.payload;
        },
        setPermissionNot: (state, action)=>{
            state.permissionNot = action.payload;
        },
    }
});

export const {setPermissionList, setMessageAlert, addPermission,
updatePermissionSlice, deletePermissionSlice, setTableManagement,
setPermissionHave, setPermissionNot} = permissionSlice.actions;
export default permissionSlice.reducer;