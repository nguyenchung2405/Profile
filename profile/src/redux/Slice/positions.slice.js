import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    tablePosList: [],
    total: "",
    positionTyleList: [],
    message: {}
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
        }
    }
})

export const {setTablePosList, setPositionTyleList, addPosTypeAndMessage,
    updatePosTypeAndMessage, deletePosTypeAndMessage} = tablePosListSlice.actions;
export default tablePosListSlice.reducer;