import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userList: [],
    total: ""
}

const userListSlice = createSlice({
    name: "userListSlice",
    initialState,
    reducers: {
        setUserList: (state, action)=>{
            let {userList, total} = action.payload;
            state.userList = userList;
            state.total = total;
        }
    }
});

export const {setUserList} = userListSlice.actions;
export default userListSlice.reducer;