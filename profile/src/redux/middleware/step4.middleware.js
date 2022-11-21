import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_ORGANIZATION, DELETE_ORGANIZATION, UPDATE_ORGANIZATION } from "../../title/title";
import { createOrganizationAPI, deleteOrganizationAPI, updateOrganizationAPI } from "../API/step4API";
import { addOrganization, removerOrganization, updateOrganizationSlice } from "../Steps/step4.slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createOrganization(payload){
    let {data} = payload;
    let result = yield call(createOrganizationAPI, data);
    let {code, message, data: dataResponse} = result;
    // console.log(dataResponse)
    if(code == 200, message === "Success"){
        yield put(addOrganization(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* deleteOrganization(payload){
    let {organ_id} = payload;
    // console.log(organ_id)
    let result = yield call(deleteOrganizationAPI, organ_id);
    let {code, message, data: dataResponse} = result;
    // console.log(dataResponse)
    if(code == 200, message === "Success"){
        yield put(removerOrganization(dataResponse.id))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* updateOrganization(payload){
    let {data} = payload;
    let result = yield call(updateOrganizationAPI, data)
    let { code, message, data: dataResponse } = result;
    if (code == 200, message === "Success") {
        yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }))
        yield put(updateOrganizationSlice(dataResponse))
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }))
    }
}

export default function* step4Middleware(){
    yield takeLatest(CREATE_ORGANIZATION, createOrganization);
    yield takeLatest(DELETE_ORGANIZATION, deleteOrganization);
    yield takeLatest(UPDATE_ORGANIZATION, updateOrganization);
}