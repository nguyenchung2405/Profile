import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_POSITION_TYPE, DELETE_POSITION_TYPE, GET_POSITIONS_LIST, GET_POSITION_TYPE_LIST, UPDATE_POSITION_TYPE } from "../../title/title";
import { createPosTypeAPI, deletePosTypeAPI, getPositionListAPI, getPositionTypeListAPI, updatePosTypeAPI } from "../API/positionAPI";
import { addPosTypeAndMessage, deletePosTypeAndMessage, setPositionTyleList, setTablePosList, updatePosTypeAndMessage } from "../Slice/positions.slice";

function* getPositionList(payload){
    let {page,pageNumber} = payload.table;
    let {code, message, data: positionList, metadata: {total_items: total}} =  yield call(getPositionListAPI,page, pageNumber);
    if(code == 200 && message === "Success"){
        yield put(setTablePosList({positionList, total}))
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
        yield put(deletePosTypeAndMessage({dataResponse, message: {type: "error", msg:"Thao tác thất bại"}}))
    }
}

export default function* Positions(){
    yield takeLatest(GET_POSITIONS_LIST, getPositionList)
    yield takeLatest(GET_POSITION_TYPE_LIST, getPositionTypeList)
    yield takeLatest(CREATE_POSITION_TYPE, createPosType)
    yield takeLatest(UPDATE_POSITION_TYPE, updatePosType)
    yield takeLatest(DELETE_POSITION_TYPE, deletePosType)
}