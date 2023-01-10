import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_FAMILY_RELATIONSHIP_CON_STEP7, CREATE_FAMILY_RELATIONSHIP_STEP7, GET_DISTRICTS_STEP7, GET_DISTRICTS_STEP7_CON, UPDATE_FAMILY_RELATIONSHIP_CON_STEP7, UPDATE_FAMILY_RELATIONSHIP_STEP7 } from "../../title/title";
import { createFamilyRelaAPI, createFamilyRelaConAPI, getDistrictsStep7API, updateFamilyRelaAPI, updateFamilyRelaConAPI } from "../API/step7API";
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
        yield put(addFamilyRelationship(data_VoChong))
        yield put(setMessageAlert({type: "success", msg: "Tạo thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Tạo thất bại"}))
    }
};

function* createFamilyRelaConStep7(payload){
    let {data: valueFormCon} = payload;
    let result = yield call(createFamilyRelaConAPI, valueFormCon);
    let {msg, dataResponse: {data, code, message}} = result;
    if(msg === "Thành công" && +code === 200 && message === "Success"){
        yield put(addFamilyRelationship(data));
        yield put(setMessageAlert({type: "success", msg: "Tạo thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Tạo thất bại"}))
    }
}

function* updateFamilyRelaStep7(payload){
    let {data} = payload;
    let result = yield call(updateFamilyRelaAPI, data);
    if(result[0]?.msg === "Thành công"){
        let data_VoChong = result[1].data;
        yield put(updateFamilyRelationshipSlice(data_VoChong))
        // yield put(updateFamilyRelationshipSlice(data_Con))
        yield put(setMessageAlert({type: "success", msg: "Cập nhật thành công"}))
    } else {
        // console.log("fail step7")
        yield put(setMessageAlert({type: "error", msg: "Cập nhật thất bại"}))
    }
}

function* updateFamilyRelaConStep7(payload){
    let {data: valueFormCon} = payload;
    let result = yield call(updateFamilyRelaConAPI, valueFormCon);
    let {code, data: data_Con, message} = result;
    if(+code === 200 && message === "Success"){
        yield put(updateFamilyRelationshipSlice(data_Con))
        yield put(setMessageAlert({type: "success", msg: "Cập nhật thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Cập nhật thất bại"}))
    }
}

export default function* step7Middleware(){
    yield takeLatest(GET_DISTRICTS_STEP7, getDistrictsStep7);
    yield takeLatest(GET_DISTRICTS_STEP7_CON, getDistrictsStep7_Con);
    yield takeLatest(CREATE_FAMILY_RELATIONSHIP_STEP7, createFamilyRelaStep7)
    yield takeLatest(CREATE_FAMILY_RELATIONSHIP_CON_STEP7, createFamilyRelaConStep7)
    yield takeLatest(UPDATE_FAMILY_RELATIONSHIP_STEP7, updateFamilyRelaStep7)
    yield takeLatest(UPDATE_FAMILY_RELATIONSHIP_CON_STEP7, updateFamilyRelaConStep7)
}