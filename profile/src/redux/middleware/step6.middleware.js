import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_REWARD_DISCIPLINE } from "../../title/title";
import { createRewardDisciplineAPI } from "../API/step6API";
import { setMessageAlert } from "../Steps/stepsSlice";

function* createRewardDiscipline(payload){
    let {data} = payload;
    let result = yield call(createRewardDisciplineAPI, data)
    console.log(result)
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        // yield put(removeTrainingFostering(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

export default function* step6Middleware(){
    yield takeLatest(CREATE_REWARD_DISCIPLINE, createRewardDiscipline)
}