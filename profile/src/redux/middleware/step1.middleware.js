import { call, takeLatest, put } from "redux-saga/effects";
import { GET_PROVINCES, GET_DISTRICTS_BIRTH_PLACE, GET_DISTRICTS_HOME_TOWN, GET_DISTRICTS_ADDRESS } from "../../title/title";
import { getProvinces_API, getDistricts_Wards_API, getDistricts_Wards_HT_API, getDistricts_Wards_ADDRESS_API } from "../API/step1API";
import { setNoiOQuan, setNoiOTinh, setNoiSinhQuan, setNoiSinhTinh, setQueQuanQuan, setQueQuanTinh } from "../Steps/step1/step1Slice";

function* getProvinces_ByAPI(){
    let provinces = yield call(getProvinces_API);
    yield put(setNoiSinhTinh(provinces));
    yield put(setQueQuanTinh(provinces));
    yield put(setNoiOTinh(provinces))
}

function* getDistrict_Ward_ByAPI(payload){
    let {districts} = yield call(getDistricts_Wards_API,payload.code);
    yield put(setNoiSinhQuan(districts));
}

function* getDistrict_HomeTown_Ward_ByAPI(payload){
    let {districts} = yield call(getDistricts_Wards_HT_API,payload.code);
    yield put(setQueQuanQuan(districts));
}

function* getDistrict_Ward_Address_ByAPI(payload){
    let {districts} = yield call(getDistricts_Wards_ADDRESS_API,payload.code);
    yield put(setNoiOQuan(districts));
}

export default function* step1(){
    yield takeLatest(GET_PROVINCES,getProvinces_ByAPI)
    yield takeLatest(GET_DISTRICTS_BIRTH_PLACE, getDistrict_Ward_ByAPI)
    yield takeLatest(GET_DISTRICTS_HOME_TOWN, getDistrict_HomeTown_Ward_ByAPI)
    yield takeLatest(GET_DISTRICTS_ADDRESS, getDistrict_Ward_Address_ByAPI)
}