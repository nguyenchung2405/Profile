import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_POSITION_AND_MANAGEMENT, CREATE_POSITION_TYPE, DELETE_POSITION_AND_MANAGEMENT, DELETE_POSITION_TYPE, GET_POSITIONS_LIST, GET_POSITION_TYPE_LIST, UPDATE_POSITION_AND_MANAGEMENT, UPDATE_POSITION_TYPE } from "../../title/title";
import { createPositionAndManagementAPI, createPosTypeAPI, deletePositionAndManagementAPI, deletePosTypeAPI, getPositionListAPI, getPositionTypeListAPI, updatePositionAndManagementAPI, updatePosTypeAPI } from "../API/positionAPI";
import { addPosTypeAndMessage, deleteItemToTablePosList, deletePosTypeAndMessage, setLoading, setMessage, setPositionTyleList, setTablePosList, updateItemToTablePosList, updatePosTypeAndMessage } from "../Slice/positions.slice";

function* getPositionList(payload){
    let {page,pageNumber} = payload.table;
    let {code, message, data: positionList, metadata: {total_items: total}} =  yield call(getPositionListAPI,page, pageNumber);
    if(code == 200 && message === "Success"){
        yield put(setTablePosList({positionList, total}))
        yield put(setLoading(false))
    }
}

function* getPositionTypeList(){
    let result = yield call(getPositionTypeListAPI);
    let {code, data, message} = result;
    if(code == 200 && message === "Success"){
        yield put(setPositionTyleList(data))
    }
}

function* createPosType(payload){
    let {data} = payload;
    let result = yield call(createPosTypeAPI, data)
    let {code, data: dataResponse, message} = result;
    if(code == 200 && message === "Success"){
        yield put(addPosTypeAndMessage({dataResponse, message: {type: "success", msg:"Thao tác thành công"}}))
    } else {
        yield put(addPosTypeAndMessage({dataResponse: "", message: {type: "error", msg:"Thao tác thất bại"}}))
    }
}

function* updatePosType(payload){
    let {data} = payload;
    let result = yield call(updatePosTypeAPI, data)
    let {code, data: dataResponse, message} = result;
    if(code == 200 && message === "Success"){
        yield put(updatePosTypeAndMessage({dataResponse, message: {type: "success", msg:"Thao tác thành công"}}))
    } else {
        yield put(updatePosTypeAndMessage({dataResponse: "", message: {type: "error", msg:"Thao tác thất bại"}}))
    }
}

function* deletePosType(payload){
    let {pos_type_id} = payload;
    let result = yield call(deletePosTypeAPI, pos_type_id)
    let {code, data: dataResponse, message} = result;
    if(code == 200 && message === "Success"){
        yield put(deletePosTypeAndMessage({dataResponse, message: {type: "success", msg:"Thao tác thành công"}}))
    }else {
        yield put(deletePosTypeAndMessage({dataResponse: "", message: {type: "error", msg:"Thao tác thất bại"}}))
    }
}

function* createPositionAndManagement(payload){
    let {data} = payload;
    let result = yield call(createPositionAndManagementAPI, data)
    let {code, data: dataResponse, message} = result;
    if(code == 200 && message === "Success"){
        yield put(setMessage({type: "success", msg:"Thao tác thành công"}))
    } else {
        yield put(setMessage({type: "error", msg:"Thao tác thất bại"}))
    }
}

function* updatePositionAndManagement(payload){
    let {pos_management_id, pos_type: {pos_type_id}, position: {name, pos_id}} = payload.data;
    let data = { pos_management_id, pos_type_id, name, pos_id };
    // console.log(data)
    let result = yield call(updatePositionAndManagementAPI, data)
    // console.log(result)
    let {name: pos_name} = result[0].data;
    let {pos_type_id: pos_type_ID} = result[1].data;
    let {status} = result[2];
    if(status === 200){
        let dataUpdateed = {pos_name, pos_management_id, pos_type_ID}
        yield put(updateItemToTablePosList(dataUpdateed))
        yield put(setMessage({type: "success", msg:"Thao tác thành công"}))
    } else {
        yield put(setMessage({type: "error", msg:"Thao tác thất bại"}))
    }
}

function* deletePositionAndManagement(payload){
    let {pos_mana_id, pos_id} = payload.data;
    // console.log(pos_mana_id, pos_id)
    let data = {pos_mana_id, pos_id};
    let result = yield call(deletePositionAndManagementAPI, data);
    console.log(result)
    let {status} = result[2];
    if(status === 200){
        yield put(deleteItemToTablePosList(pos_mana_id));
        yield put(setMessage({type: "success", msg:"Thao tác thành công"}))
    } else {
        yield put(setMessage({type: "error", msg:"Thao tác thất bại"}))
    }
}

export default function* Positions(){
    yield takeLatest(GET_POSITIONS_LIST, getPositionList)
    yield takeLatest(GET_POSITION_TYPE_LIST, getPositionTypeList)
    yield takeLatest(CREATE_POSITION_TYPE, createPosType)
    yield takeLatest(UPDATE_POSITION_TYPE, updatePosType)
    yield takeLatest(DELETE_POSITION_TYPE, deletePosType)
    yield takeLatest(CREATE_POSITION_AND_MANAGEMENT, createPositionAndManagement)
    yield takeLatest(UPDATE_POSITION_AND_MANAGEMENT, updatePositionAndManagement)
    yield takeLatest(DELETE_POSITION_AND_MANAGEMENT, deletePositionAndManagement)
}