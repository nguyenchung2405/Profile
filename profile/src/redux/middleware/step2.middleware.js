import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_PERSONAL_HISTORY, DELETE_PERSONAL_HISTORY } from "../../title/title";
import { createPersonalHistoryAPI, deletePersonalHistoryAPI } from "../API/step2API"
import { addPersonalHistory, removePersonalHistory } from "../Steps/step2.slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createPersonalHistory(payload) {
    let { data } = payload;
    let result = yield call(createPersonalHistoryAPI, data)
    let { code, message, data: dataResponse } = result;
    if (code == 200, message === "Success") {
        yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }))
        yield put(addPersonalHistory(dataResponse))
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }))
    }
}

function* deletePersonalHistory(payload) {
    let { personal_history_id } = payload;
    let result = yield call(deletePersonalHistoryAPI, personal_history_id)
    // console.log(result)
    let { code, message, data: dataResponse } = result;
    if (code == 200, message === "Success") {
        yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }))
        yield put(removePersonalHistory(dataResponse.id))
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }))
    }
}

export default function* step2Middleware() {
    yield takeLatest(CREATE_PERSONAL_HISTORY, createPersonalHistory)
    yield takeLatest(DELETE_PERSONAL_HISTORY, deletePersonalHistory)
}