import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_PARTY } from "../../title/title";
import { createPartyAPI } from "../API/step3API";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createParty(payload){
    let {data} = payload;
    let result = yield call(createPartyAPI, data);
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
        // yield put(removePersonalHistory(dataResponse.id))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

export default function* step3Middleware(){
    yield takeLatest(CREATE_PARTY, createParty)
}