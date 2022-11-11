import { call, takeLatest, put } from "redux-saga/effects";
import { GET_USER_DEGREE } from "../../title/title";
import { getUserDegreeAPI } from "../API/step2API";

function* getUserDegree(payload){
    let {user_degree_id} = payload;
    let result = yield call(getUserDegreeAPI, user_degree_id)
    console.log(result)
}

export default function* step2Middleware(){
    yield takeLatest(GET_USER_DEGREE, getUserDegree)
}