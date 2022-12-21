import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    tableDepList: [],
    total: "",
    depInfor: {note: "", parent_id: null},
    message: ""
}

const tableDepListSlice = createSlice({
    name: "tableDepListSlice",
    initialState,
    reducers: {
        setDepList: (state,action)=>{
            let {tableList, total} = action.payload;
            state.tableDepList = tableList;
            state.total = total;
        },
        setDepInfor: (state,action)=>{
            let data = action.payload;
            state.depInfor = data;
        },
        updateDepartmentSlice: (state,action)=>{
            let {parent_id, id} = action.payload;
            console.log(action.payload)
            if(parent_id !== null && id){
                // Cập nhật children => tìm ra cha nó => tìm ra nó trong children của cha => chỉnh sửa
                let depUpdate = state.tableDepList.find(dep => dep.id === parent_id)
                let childUpdateIndex = depUpdate.children.findIndex(child => child.id === id);
                depUpdate.children[childUpdateIndex] = {...action.payload};
            } else {
                let depUpdateIndex = state.tableDepList.findIndex(dep => dep.id === id)
                let {children} = state.tableDepList[depUpdateIndex];
                state.tableDepList[depUpdateIndex] = {...action.payload, children};
            }
        },
        addDepartmentSlice: (state,action)=>{
            let {parent_id, id} = action.payload;
            // console.log(action.payload)
            if(parent_id !== null && id){
                let depParent = state.tableDepList.find(dep => dep.id === parent_id);
                console.log(current(depParent))
                let {children} = depParent
                if(children === null || !children){
                    depParent.children =[]
                    depParent.children.unshift(action.payload);
                } else {
                    depParent.children.unshift(action.payload);
                }
            } else {
                state.tableDepList.unshift(action.payload);
            }
        },
        setMessage: (state,action)=>{
            state.message = action.payload
        }
    }
});

export const {setDepList, setDepInfor, updateDepartmentSlice, 
addDepartmentSlice, setMessage} = tableDepListSlice.actions;
export default tableDepListSlice.reducer;