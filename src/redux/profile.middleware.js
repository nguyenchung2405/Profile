import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PROFILE_BY_ID } from "../title/title";
import { getProfileByID_API } from "./API/profileAPI";

function* getProfileByID(payload){
    const profile = yield call(getProfileByID_API,payload);
}

export default function* Profile(){
    yield takeLatest(GET_PROFILE_BY_ID, getProfileByID)
}