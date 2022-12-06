import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CREATE_PROFILE, DELETE_DEP_POS, GET_AVATAR, GET_PROFILE_BY_ID, ONLY_CREATE_PROFILE, UPDATE_PROFILE } from "../title/title";
import { mappingDepartmentPosition, mappingFamilyRelationship, mappingJournalistCard, mappingProfileAPI, mappingProfileStep1, mappingUserDegree } from "../ultils/mapping";
import { createProfile_API, deleteDepPosAPI, getAvatar_API, getProfileByID_API, onlyCreateProfileAPI, updateProfile_API } from "./API/profileAPI";
import { setIsLoading } from "./Slice/loading";
import { addPBCV, removePBCV, setAvatar, setIsCreateProfile, setIsNavigate, setIsSubmit, setValues } from "./Steps/step1/step1Slice";
import { setPersonalHistory } from "./Steps/step2.slice";
import { getParty } from "./Steps/step3.slice";
import { setOrganization } from "./Steps/step4.slice";
import { setTrainingFostering } from "./Steps/step5.slice";
import { setRewardDiscipline } from "./Steps/step6Slice";
import { setFamilyRelationship } from "./Steps/step8Slice";
import { setIsNextStep, setMessageAlert, setUserProfileID } from "./Steps/stepsSlice";

function* getProfileByID(payload) {
    let { proID, email, soDienThoai } = payload.data;
    const { status, data: { data, message } } = yield call(getProfileByID_API, proID);
    // console.log(data)
    if (status === 200 && message === "Success") {
        // console.log(data)
        let { id, user_id } = data;
        let jour_card_id = data.journalist_card[0]?.id;
        let user_degree_id = data?.user_degree[0]?.id;
        let {personal_history, party, organization, training_fostering, reward_discipline,
            family_relationship} = data;
        // put pro_id và user_id lên reducer quản lý
        yield put(setUserProfileID({ pro_id: id, user_id, jour_card_id, user_degree_id }))
        yield put(setPersonalHistory(personal_history))
        yield put(getParty(party))
        yield put(setOrganization(organization))
        yield put(setTrainingFostering(training_fostering))
        yield put(setRewardDiscipline(reward_discipline))
        yield put(setFamilyRelationship(mappingFamilyRelationship(family_relationship)))
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
    const {newValueForm, user_id, jour_card_id, user_degree_id, pro_id, navigate} = payload.valuesUpdate;
    // console.log(newValueForm)
    let {phongBanCVObj , ...rest} = newValueForm;
    let profile = mappingProfileStep1(newValueForm);
    let depPos = mappingDepartmentPosition(newValueForm);
    let userDegree = mappingUserDegree(newValueForm);
    let jourCard = mappingJournalistCard(newValueForm);
    let dataToUpdate = { profile, userDegree, jourCard, depPos, user_id, jour_card_id, user_degree_id, pro_id };
    yield put(setIsNextStep(true))
    yield put(setValues(rest))
    let profileUpdated = yield call(updateProfile_API,dataToUpdate)
    let msg = profileUpdated.data[0]?.msg;
    if(msg === "Thành công"){
        yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }))
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }))
        yield put(setIsSubmit(false))
    }
}

function* createProfile(payload) {
    const { valuesCreate: {valueForm, navigate} } = payload;
    // console.log(valuesCreate)
    let profile = mappingProfileStep1(valueForm);
    let depPos = mappingDepartmentPosition(valueForm);
    let userDegree = mappingUserDegree(valueForm);
    let jourCard = mappingJournalistCard(valueForm);
    let dataToCreate = { profile, depPos, userDegree, jourCard, email: valueForm.email, soDienThoai: valueForm.soDienThoai }
    // console.log(dataToCreate)
    yield put(setValues(valueForm))
    yield put(setIsNextStep(true))
    let result = yield call(createProfile_API, dataToCreate)
    // console.log(result)
    let msg = result.data.message;
    if(msg === "Thành công"){
        yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }))
        navigate("/hr/profile")
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }))
        navigate("/hr/profile")
    }
}

function* getAvatar(payload) {
    let { user_id } = payload
    const res = yield call(getAvatar_API, user_id);
    // console.log(res)
    if (res.data !== null) {
        let avatar = res.data;
        if(avatar?.type === "3x4" && avatar.resource !== null){
            let { content } = avatar.resource;
            yield put(setAvatar(content));
        }
        // let index = avatar.resource_content.length - 1;
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
    // console.log(dataToCreate)
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