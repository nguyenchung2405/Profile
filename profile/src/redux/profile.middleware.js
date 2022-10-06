import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PROFILE, GET_PROFILE_BY_ID, UPDATE_PROFILE } from "../title/title";
import { userInforEmpty } from "../ultils/defaultUserInfor";
import { mappingProfileAPI } from "../ultils/mapping";
import { getProfileByID_API, updateProfile_API } from "./API/profileAPI";
import { setIsLoading } from "./Slice/loading";
import { setIsCreateProfile, setIsNavigate, setValues } from "./Steps/step1/step1Slice";
import { setIsNextStep, setUserProfileID } from "./Steps/stepsSlice";

function* getProfileByID(payload){
    const {status, data: {data, message}} = yield call(getProfileByID_API,payload.user_id);
    if(status === 200 && message === "Successfully"){
        let {id, user_id} = data;
        // put pro_id và user_id lên reducer quản lý
        yield put(setUserProfileID({pro_id: id, user_id}))
        // Thành công thì put lên reducer quản lý => render lại trang
        let profile = mappingProfileAPI(data)
        yield put(setValues(profile));
        yield put(setIsLoading(false))
    } else {
        // failed thì put dữ liệu rỗng lên reducer + set biến tạo profile => tạo profile mới
        // yield put(setValues(userInforEmpty))
        // yield put(setIsCreateProfile(true))
        yield put(setIsNavigate(true))
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

function* createProfile(payload){
    const {valuesCreate} = payload;
    yield put(setValues(valuesCreate))
    yield put(setIsNextStep(true))
}

export default function* Profile(){
    yield takeLatest(GET_PROFILE_BY_ID, getProfileByID)
    yield takeLatest(UPDATE_PROFILE, updateProfile)
    yield takeLatest(CREATE_PROFILE, createProfile)
}