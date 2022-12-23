import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_FAMILY_RELATIONSHIP_STEP7, GET_DISTRICTS_STEP7, GET_DISTRICTS_STEP7_CON, UPDATE_FAMILY_RELATIONSHIP_STEP7 } from "../../title/title";
import { createFamilyRelaAPI, getDistrictsStep7API, updateFamilyRelaAPI } from "../API/step7API";
import { setDiaChiQuan_ST7, setQueQuanQuan_ST7 } from "../Steps/step7Slice";
import { addFamilyRelationship, updateFamilyRelationshipSlice } from "../Steps/step8Slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* getDistrictsStep7(payload){
    let {districts} = yield call(getDistrictsStep7API ,payload.code);
    yield put(setQueQuanQuan_ST7(districts));
}

function* getDistrictsStep7_Con(payload){
    let {districts} = yield call(getDistrictsStep7API ,payload.code);
    yield put(setDiaChiQuan_ST7(districts));
}

function* createFamilyRelaStep7(payload){
    let {data} = payload;
    let result = yield call(createFamilyRelaAPI, data);
    if(result[0]?.msg === "Thành công"){
        let data_VoChong = result[1].data;
        let data_Con = result[2].data;
        yield put(addFamilyRelationship(data_VoChong))
        yield put(addFamilyRelationship(data_Con))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
};

function* updateFamilyRelaStep7(payload){
    let {data} = payload;
    let result = yield call(updateFamilyRelaAPI, data);
    if(result[0]?.msg === "Thành công"){
        let data_VoChong = result[1].data;
        let data_Con = result[2].data;
        yield put(updateFamilyRelationshipSlice(data_VoChong))
        yield put(updateFamilyRelationshipSlice(data_Con))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        console.log("fail step7")
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

export default function* step7Middleware(){
    yield takeLatest(GET_DISTRICTS_STEP7, getDistrictsStep7);
    yield takeLatest(GET_DISTRICTS_STEP7_CON, getDistrictsStep7_Con);
    yield takeLatest(CREATE_FAMILY_RELATIONSHIP_STEP7, createFamilyRelaStep7)
    yield takeLatest(UPDATE_FAMILY_RELATIONSHIP_STEP7, updateFamilyRelaStep7)
}