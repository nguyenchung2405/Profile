import { call, takeLatest, put } from "redux-saga/effects";
import { GET_DISTRICTS_STEP7, GET_DISTRICTS_STEP7_CON } from "../../title/title";
import { getDistrictsStep7API } from "../API/step7API";
import { setDiaChiQuan_ST7, setQueQuanQuan_ST7 } from "../Steps/step7Slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* getDistrictsStep7(payload){
    let {districts} = yield call(getDistrictsStep7API ,payload.code);
    yield put(setQueQuanQuan_ST7(districts));
}

function* getDistrictsStep7_Con(payload){
    let {districts} = yield call(getDistrictsStep7API ,payload.code);
    yield put(setDiaChiQuan_ST7(districts));
}

export default function* step7Middleware(){
    yield takeLatest(GET_DISTRICTS_STEP7, getDistrictsStep7);
    yield takeLatest(GET_DISTRICTS_STEP7_CON, getDistrictsStep7_Con);
}