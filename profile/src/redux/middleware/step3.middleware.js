import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_PARTY, UPDATE_PARTY } from "../../title/title";
import { createPartyAPI, updatePartyAPI } from "../API/step3API";
import { setDataParty } from "../Steps/step3.slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createParty(payload){
    let {data} = payload;
    let result = yield call(createPartyAPI, data);
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
        yield put(setDataParty(dataResponse))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* updateParty(payload){
    let {data } = payload;
    let result = yield call(updatePartyAPI, data)
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
        yield put(setDataParty(dataResponse))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

export default function* step3Middleware(){
    yield takeLatest(CREATE_PARTY, createParty)
    yield takeLatest(UPDATE_PARTY, updateParty)
}