import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    tablePosList: [],
    total: "",
    positionTyleList: [],
    message: {},
    showLoading: false
}

const tablePosListSlice = createSlice({
    name: "tablePosListSlice",
    initialState,
    reducers: {
        setTablePosList: (state,action)=>{
            let {positionList, total} = action.payload;
            state.tablePosList = positionList;
            state.total = total;
        },
        setPositionTyleList: (state,action)=>{
            state.positionTyleList = action.payload;
        },
        addPosTypeAndMessage: (state,action)=>{
            let {dataResponse, message} = action.payload;
            if(dataResponse !== ""){
                state.positionTyleList.unshift(dataResponse)
            }
            state.message = message
        },
        updatePosTypeAndMessage: (state,action)=>{
            let {dataResponse, message} = action.payload;
            if(dataResponse !== ""){
                let postypeIndex = state.positionTyleList.findIndex(postype => postype.id == dataResponse.id);
                state.positionTyleList[postypeIndex] = dataResponse
            }
            state.message = message
        },
        deletePosTypeAndMessage: (state, action)=>{
            let {dataResponse, message} = action.payload;
            if(dataResponse !== ""){
                let postypeIndex = state.positionTyleList.findIndex(postype => postype.id == dataResponse.id);
                state.positionTyleList.splice(postypeIndex, 1)
            }
            state.message = message
        },
        setLoading: (state, action)=>{
            state.showLoading = action.payload;
        },
        setMessage: (state,action)=>{
            state.message = action.payload;
        },
        addItemToTablePosList: (state,action)=>{
            let {name, identifier: postype_id} = action.payload;
            let pos_type = state.positionTyleList.find(postype => postype.id === postype_id)
            let {identifier} = pos_type;
            let newObject = {
                position: {
                    name: name
                },
                position_type: {
                    identifier: identifier
                }
            }
            state.tablePosList.unshift(newObject)
        },
        updateItemToTablePosList: (state,action)=>{
            let {pos_name, pos_type_ID, pos_management_id} = action.payload;
            let index = state.tablePosList.findIndex((pos_ma => pos_ma.id === pos_management_id))
            state.tablePosList[index].position.name = pos_name;
            let postype = state.positionTyleList.find(postype => postype.id == pos_type_ID)
            // console.log(current(postype))
            state.tablePosList[index].position_type = postype;
        },
        deleteItemToTablePosList: (state, action)=>{
            let index = state.tablePosList.findIndex(pos_mana => pos_mana.id === action.payload);
            state.tablePosList.splice(index, 1)
        }
    }
})

export const {setTablePosList, setPositionTyleList, addPosTypeAndMessage,
updatePosTypeAndMessage, deletePosTypeAndMessage, setLoading, setMessage,
addItemToTablePosList, updateItemToTablePosList, deleteItemToTablePosList} = tablePosListSlice.actions;
export default tablePosListSlice.reducer;