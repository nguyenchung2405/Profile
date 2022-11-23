import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_REWARD_DISCIPLINE, DELETE_REWARD_DISCIPLINE, UPDATE_REWARD_DISCIPLINE } from "../../title/title";
import { createRewardDisciplineAPI, deleteRewardDisciplineAPI, updateRewardDisciplineAPI } from "../API/step6API";
import { addRewardDiscipline, removeRewardDiscipline, updateRewardDisciplineSlice } from "../Steps/step6Slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createRewardDiscipline(payload){
    let {data} = payload;
    let result = yield call(createRewardDisciplineAPI, data)
    console.log(result)
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(addRewardDiscipline(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* deleteRewardDiscipline(payload){
    let {re_dis_id} = payload;
    // console.log(re_dis_id)
    let result = yield call(deleteRewardDisciplineAPI, re_dis_id)
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(removeRewardDiscipline(dataResponse.id))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* updateRewardDiscipline(payload){
    let {data} = payload;
    let result = yield call(updateRewardDisciplineAPI, data);
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(updateRewardDisciplineSlice(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

export default function* step6Middleware(){
    yield takeLatest(CREATE_REWARD_DISCIPLINE, createRewardDiscipline)
    yield takeLatest(DELETE_REWARD_DISCIPLINE, deleteRewardDiscipline)
    yield takeLatest(UPDATE_REWARD_DISCIPLINE, updateRewardDiscipline)
}