import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PROFILE, GET_AVATAR, GET_PROFILE_BY_ID, UPDATE_PROFILE } from "../title/title";
import { userInforEmpty } from "../ultils/defaultUserInfor";
import { mappingDepartmentPosition, mappingJournalistCard, mappingProfileAPI, mappingProfileStep1, mappingUserDegree } from "../ultils/mapping";
import { createProfile_API, getAvatar_API, getProfileByID_API, updateProfile_API } from "./API/profileAPI";
import { setIsLoading } from "./Slice/loading";
import { setAvatar, setIsCreateProfile, setIsNavigate, setValues } from "./Steps/step1/step1Slice";
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
        // failed thì chuyển trang đến 404 Page (url fail: /api/profile/:id
        // id trên url này không tồn tại trên DB )
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
    console.log(valuesCreate)
    let profile = mappingProfileStep1(valuesCreate);
    let depPos = mappingDepartmentPosition(valuesCreate);
    let userDegree = mappingUserDegree(valuesCreate);
    let jourCard = mappingJournalistCard(valuesCreate);
    let dataToCreate = {profile, depPos, userDegree, jourCard, email: valuesCreate.email, soDienThoai: valuesCreate.soDienThoai}
    yield call(createProfile_API, dataToCreate)
    // console.log(profile,depPos,userDegree,jourCard)
    yield put(setValues(valuesCreate))
    yield put(setIsNextStep(true))
}

function* getAvatar(payload){
    let {user_id} = payload
    const res = yield call(getAvatar_API, user_id);
    if(res.length > 0){
        let avatarArr = res.find(type => type.resource_type === "3x4")
        let index = avatarArr.resource_content.length - 1;
        let {content} = avatarArr.resource_content[index];
        // console.log(content)
        yield put(setAvatar(content));
    } else {
        yield put(setAvatar(""))
    }
    // console.log(content)
}

export default function* Profile(){
    yield takeLatest(GET_PROFILE_BY_ID, getProfileByID)
    yield takeLatest(UPDATE_PROFILE, updateProfile)
    yield takeLatest(CREATE_PROFILE, createProfile)
    yield takeLatest(GET_AVATAR, getAvatar)
}