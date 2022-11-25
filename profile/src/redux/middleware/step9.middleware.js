import { call, takeLatest, put } from "redux-saga/effects";
import { GET_DISTRICTS_STEP9 } from "../../title/title";
import { getDistrictsStep9API } from "../API/step9API";
import { setNoiOHienTaiQuan_ST9 } from "../Steps/step9Slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* getDistrictsStep9(payload){
    let {districts} = yield call(getDistrictsStep9API ,payload.code);
    yield put(setNoiOHienTaiQuan_ST9(districts));
}

export default function* step9Middleware(){
    yield takeLatest(GET_DISTRICTS_STEP9, getDistrictsStep9)
}