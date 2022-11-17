import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CREATE_PROFILE, DELETE_DEP_POS, GET_AVATAR, GET_PROFILE_BY_ID, ONLY_CREATE_PROFILE, UPDATE_PROFILE } from "../title/title";
import { mappingDepartmentPosition, mappingJournalistCard, mappingProfileAPI, mappingProfileStep1, mappingUserDegree } from "../ultils/mapping";
import { createProfile_API, deleteDepPosAPI, getAvatar_API, getProfileByID_API, onlyCreateProfileAPI, updateProfile_API } from "./API/profileAPI";
import { setIsLoading } from "./Slice/loading";
import { addPBCV, removePBCV, setAvatar, setIsCreateProfile, setIsNavigate, setValues } from "./Steps/step1/step1Slice";
import { setPersonalHistory } from "./Steps/step2.slice";
import { getParty } from "./Steps/step3.slice";
import { setIsNextStep, setUserProfileID } from "./Steps/stepsSlice";

function* getProfileByID(payload) {
    let { proID, email, soDienThoai } = payload.data;
    const { status, data: { data, message } } = yield call(getProfileByID_API, proID);
    // console.log(data)
    if (status === 200 && message === "Success") {
        console.log(data)
        let { id, user_id } = data;
        let jour_card_id = data.journalist_card[0].id;
        let user_degree_id = data?.user_degree[0]?.id;
        let {personal_history, party} = data;
        // put pro_id và user_id lên reducer quản lý
        yield put(setUserProfileID({ pro_id: id, user_id, jour_card_id, user_degree_id }))
        yield put(setPersonalHistory(personal_history))
        yield put(getParty(party))
        // Thành công thì put lên reducer quản lý => render lại trang
        let profile = mappingProfileAPI(data)
        profile["email"] = email;
        profile["soDienThoai"] = soDienThoai;
        let {phongBanCVObj} = profile;
        // console.log(phongBanCVObj)
        if(phongBanCVObj.length > 0){
            yield put(addPBCV(phongBanCVObj))
        }
        // console.log(profile)
        yield put(setValues(profile));
        yield put(setIsLoading(false))
    } else {
        // failed thì chuyển trang đến 404 Page (url fail: /api/profile/:id
        // id trên url này không tồn tại trên DB )
        yield put(setIsNavigate(true))
    }
}

function* updateProfile(payload){
    // console.log(payload.valuesUpdate)
    const {valueForm, user_id, jour_card_id, user_degree_id, pro_id} = payload.valuesUpdate;
    console.log(valueForm)
    let profile = mappingProfileStep1(valueForm);
    let depPos = mappingDepartmentPosition(valueForm);
    let userDegree = mappingUserDegree(valueForm);
    let jourCard = mappingJournalistCard(valueForm);
    let dataToUpdate = { profile, userDegree, jourCard, depPos, user_id, jour_card_id, user_degree_id, pro_id };
    // console.log(dataToUpdate)
    yield put(setIsNextStep(true))
    yield put(setValues(valueForm))
    let profileUpdated = yield call(updateProfile_API,dataToUpdate)
}

function* createProfile(payload) {
    const { valuesCreate } = payload;
    // console.log(valuesCreate)
    let profile = mappingProfileStep1(valuesCreate);
    let depPos = mappingDepartmentPosition(valuesCreate);
    let userDegree = mappingUserDegree(valuesCreate);
    let jourCard = mappingJournalistCard(valuesCreate);
    let dataToCreate = { profile, depPos, userDegree, jourCard, email: valuesCreate.email, soDienThoai: valuesCreate.soDienThoai }
    // console.log(dataToCreate)
    yield put(setValues(valuesCreate))
    yield put(setIsNextStep(true))
    yield call(createProfile_API, dataToCreate)
}

function* getAvatar(payload) {
    let { user_id } = payload
    const res = yield call(getAvatar_API, user_id);
    if (res.length > 0) {
        let avatarArr = res.find(type => type.resource_type === "3x4")
        let index = avatarArr.resource_content.length - 1;
        let { content } = avatarArr.resource_content[index];
        // console.log(content)
        yield put(setAvatar(content));
    } else {
        yield put(setAvatar(""))
    }
    // console.log(content)
}

function* onlyCreateProfile(payload) {
    let { valueForm, user_id } = payload.valuesCreate;
    // console.log(valueForm, user_id)
    let profile = mappingProfileStep1(valueForm);
    let depPos = mappingDepartmentPosition(valueForm);
    let userDegree = mappingUserDegree(valueForm);
    let jourCard = mappingJournalistCard(valueForm);
    let dataToCreate = { profile, depPos, userDegree, jourCard, user_id }
    console.log(dataToCreate)
    yield put(setValues(valueForm))
    yield put(setIsNextStep(true))
    yield call(onlyCreateProfileAPI, dataToCreate)
}

function* deleteDepPos(payload) {
    let { dep_pos_id } = payload;
    // console.log(dep_pos_id)
    yield call(deleteDepPosAPI, dep_pos_id);
}

export default function* Profile() {
    yield takeEvery(GET_PROFILE_BY_ID, getProfileByID)
    yield takeLatest(UPDATE_PROFILE, updateProfile)
    yield takeLatest(CREATE_PROFILE, createProfile)
    yield takeLatest(GET_AVATAR, getAvatar)
    yield takeLatest(ONLY_CREATE_PROFILE, onlyCreateProfile)
    yield takeLatest(DELETE_DEP_POS, deleteDepPos)
}