import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_TRAINING, DELETE_TRAINING, UPDATE_TRAINING } from "../../title/title";
import { createTrainingAPI, deleteTrainingFosteringAPI, updateTrainingFosteringAPI } from "../API/step5API";
import { addTrainingFostering, removeTrainingFostering, updateTrainingFosteringSlice } from "../Steps/step5.slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createTraining(payload){
    let {data} = payload;
    console.log(data)
    if(data.diploma){
        data.diploma = data.diploma.toLowerCase();
    }
    let result = yield call(createTrainingAPI, data);
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(addTrainingFostering(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* deleteTrainingFostering(payload){
    let {tr_fos_id} = payload;
    let result = yield call(deleteTrainingFosteringAPI, tr_fos_id)
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(removeTrainingFostering(dataResponse.id))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* updateTrainingFostering(payload){
    let {data} = payload;
    let result = yield call(updateTrainingFosteringAPI, data)
    let { code, message, data: dataResponse } = result;
    if (code == 200, message === "Success") {
        yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }))
        yield put(updateTrainingFosteringSlice(dataResponse))
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }))
    }
}

export default function* step5Middleware(){
    yield takeLatest(CREATE_TRAINING, createTraining)
    yield takeLatest(DELETE_TRAINING, deleteTrainingFostering)
    yield takeLatest(UPDATE_TRAINING, updateTrainingFostering)
}