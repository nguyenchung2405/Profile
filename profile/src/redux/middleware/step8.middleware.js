import { call, takeLatest, put } from "redux-saga/effects";
import { GET_DISTRICTS_STEP8 } from "../../title/title";
import { getDistrictsStep8API } from "../API/step8API";
import { setNoiOHienTaiQuan } from "../Steps/step8Slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* getDistrictsStep8(payload){
    let {districts} = yield call(getDistrictsStep8API ,payload.code);
    yield put(setNoiOHienTaiQuan(districts));
}

export default function* step8Middleware(){
    yield takeLatest(GET_DISTRICTS_STEP8, getDistrictsStep8)
}