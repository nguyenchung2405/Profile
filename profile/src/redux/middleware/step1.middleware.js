import { call, takeLatest, put } from "redux-saga/effects";
import { GET_PROVINCES, GET_DISTRICTS_BIRTH_PLACE, GET_DISTRICTS_HOME_TOWN, GET_DISTRICTS_ADDRESS, GET_DEP_POS, GET_PART, GET_DISTRICTS_HOKHAU } from "../../title/title";
import { getProvinces_API, getDistricts_Wards_API, getDistricts_Wards_HT_API, getDistricts_Wards_ADDRESS_API, getDepPosList_API, getPart_API, getDistricts_Wards_HoKhau_API } from "../API/step1API";
import { setHoKhauQuan, setHoKhauTinh, setNoiOQuan, setNoiOTinh, setNoiSinhQuan, setNoiSinhTinh, setPB_CV, setQueQuanQuan, setQueQuanTinh, setTo } from "../Steps/step1/step1Slice";
import { setDiaChiTinh_ST7, setQueQuanTinh_ST7 } from "../Steps/step7Slice";
import { setNoiOHienTaiTinh } from "../Steps/step8Slice";
import { setNoiOHienTaiTinh_ST9 } from "../Steps/step9Slice";

function* getProvinces_ByAPI(){
    let provinces = yield call(getProvinces_API);
    yield put(setNoiSinhTinh(provinces));
    yield put(setQueQuanTinh(provinces));
    yield put(setNoiOTinh(provinces))
    yield put(setHoKhauTinh(provinces))
    yield put(setNoiOHienTaiTinh(provinces))
    yield put(setDiaChiTinh_ST7(provinces));
    yield put(setQueQuanTinh_ST7(provinces));
    yield put(setNoiOHienTaiTinh_ST9(provinces))
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
    let {districts} = yield call(getDistricts_Wards_HoKhau_API,payload.code);
    yield put(setNoiOQuan(districts));
}

function* getDistrict_Ward_HoKhau_ByAPI(payload){
    let {districts} = yield call(getDistricts_Wards_ADDRESS_API,payload.code);
    yield put(setHoKhauQuan(districts));
}

function* getDepPos(){
    let {depList : {status : statusDep, data: dataDep}, posList: {status: statusPos, data: dataPos}} = yield call(getDepPosList_API);
    // console.log(depList)
    // console.log(posList)
    if(statusDep === 200 && statusPos === 200){
        yield put(setPB_CV({depList : dataDep.data, posList: dataPos.data}))

    }
}

function* getPart(){
    let {data} = yield call(getPart_API);
    yield put(setTo(data))
}

export default function* step1(){
    yield takeLatest(GET_PROVINCES,getProvinces_ByAPI)
    yield takeLatest(GET_DISTRICTS_BIRTH_PLACE, getDistrict_Ward_ByAPI)
    yield takeLatest(GET_DISTRICTS_HOME_TOWN, getDistrict_HomeTown_Ward_ByAPI)
    yield takeLatest(GET_DISTRICTS_ADDRESS, getDistrict_Ward_Address_ByAPI)
    yield takeLatest(GET_DISTRICTS_HOKHAU, getDistrict_Ward_HoKhau_ByAPI)
    yield takeLatest(GET_DEP_POS, getDepPos)
    yield takeLatest(GET_PART, getPart)
}