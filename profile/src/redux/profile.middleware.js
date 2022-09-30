import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PROFILE_BY_ID, UPDATE_PROFILE } from "../title/title";
import { mappingProfileAPI } from "../ultils/mapping";
import { getProfileByID_API, updateProfile_API } from "./API/profileAPI";
import { setIsCreateProfile, setValues } from "./Steps/step1/step1Slice";
import { setIsNextStep } from "./Steps/stepsSlice";

function* getProfileByID(payload){
    const {status, data: {data, message}} = yield call(getProfileByID_API,payload.user_id);
    if(status === 200 && message === "Successfully"){
        let profile = mappingProfileAPI(data)
        yield put(setValues(profile));
    } else if(status === 404 && message === "Resource Not Found") {
        yield put(setIsCreateProfile(true))
    }
}

function* updateProfile(payload){
    const {valuesUpdate} = payload;
    yield put(setValues(valuesUpdate))
    yield put(setIsNextStep(true))
    // let profileUpdated = yield call(updateProfile_API,valuesUpdate.user_id,valuesUpdate)
    // if(profileUpdated.status === 200){
    //     yield put(setIsNextStep(true))
    // }
}

export default function* Profile(){
    yield takeLatest(GET_PROFILE_BY_ID, getProfileByID)
    yield takeLatest(UPDATE_PROFILE, updateProfile)
}