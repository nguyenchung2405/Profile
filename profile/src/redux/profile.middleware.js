import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  CREATE_PROFILE,
  DELETE_DEP_POS,
  DELETE_RESOURCE,
  GET_AVATAR,
  GET_PROFILE_BY_ID,
  GET_PROFILE_BY_TOKEN,
  GET_PROFILE_BY_USER_ID,
  ONLY_CREATE_PROFILE,
  TOKEN,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ACTIVE,
  EXPORT_EXCEL
} from "../title/title";
import {
  mappingDepartmentPosition,
  mappingFamilyRelationship,
  mappingJournalistCard,
  mappingProfileAPI,
  mappingProfileStep1,
  mappingUserDegree,
  mappingWorkObject,
} from "../ultils/mapping";
import {
  createProfile_API,
  deleteDepPosAPI,
  deleteResourceAPI,
  getAvatar_API,
  getDetailUserAPI,
  getProfileByID_API,
  getProfileByToken,
  getProfileByUserIDAPI,
  onlyCreateProfileAPI,
  updateProfileActiveAPI,
  updateProfile_API,
  exportExcel
} from "./API/profileAPI";
import { setIsLoading } from "./Slice/loading";
import {
  addPBCV,
  setPathUrl,
  removePBCV,
  setAvatar,
  setEmailPhone,
  setIsCreateProfile,
  setIsNavigate,
  setIsSubmit,
  setResources,
  setValues,
} from "./Steps/step1/step1Slice";
import { setPersonalHistory } from "./Steps/step2.slice";
import { getParty } from "./Steps/step3.slice";
import { setOrganization } from "./Steps/step4.slice";
import { setTrainingFostering } from "./Steps/step5.slice";
import { setRewardDiscipline } from "./Steps/step6Slice";
import { setFamilyRelationship } from "./Steps/step8Slice";
import {
  setStatus,
  setIsNextStep,
  setMessageAlert,
  setUserProfileID,
} from "./Steps/stepsSlice";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function* getProfileByID(payload) {
  let { proID, email, soDienThoai } = payload.data;
  let EMAIL, SĐT;
  const {
    status,
    data: { data, message },
  } = yield call(getProfileByID_API, proID);
  // console.log(data)
  if (status === 200 && message === "Success") {
    let { id, user_id } = data;
    let jour_card_id = data.journalist_card[0]?.id;
    let user_degree_id = data?.user_degree[0]?.id;
    let work_object_id = data?.work_object[0]?.id;
    let {
      personal_history,
      party,
      organization,
      training_fostering,
      reward_discipline,
      family_relationship,
      can_action,
      state,
      current_target: { type },
    } = data;
    // call API lấy phone, email
    if (email === undefined && soDienThoai === undefined) {
      const {
        data: { email: emailResponse, phone },
      } = yield call(getDetailUserAPI, user_id);
      EMAIL = emailResponse;
      SĐT = phone;
    } else {
      EMAIL = email;
      SĐT = soDienThoai;
    }
    // put pro_id và user_id lên reducer quản lý
    yield put(
      setUserProfileID({
        pro_id: id,
        user_id,
        jour_card_id,
        user_degree_id,
        work_object_id,
      })
    );
    yield put(setStatus({ state, can_action, type }));
    yield put(setPersonalHistory(personal_history));
    yield put(getParty(party));
    yield put(setOrganization(organization));
    yield put(setTrainingFostering(training_fostering));
    yield put(setRewardDiscipline(reward_discipline));
    yield put(
      setFamilyRelationship(mappingFamilyRelationship(family_relationship))
    );
    // Thành công thì put lên reducer quản lý => render lại trang
    let profile = mappingProfileAPI(data);
    profile["email"] = EMAIL;
    profile["soDienThoai"] = SĐT;
    // console.log(profile)
    let { phongBanCVObj } = profile;
    if (phongBanCVObj.length > 0) {
      yield put(addPBCV(phongBanCVObj));
    }
    // console.log(profile)
    yield put(setValues(profile));
    yield put(setIsLoading(false));
  } else {
    // failed thì chuyển trang đến 404 Page (url fail: /api/profile/:id
    // id trên url này không tồn tại trên DB )
    yield put(setIsNavigate(true));
  }
}

function* getProfileByUserID(payload) {
  let { User_ID } = payload;
  let result = yield call(getProfileByUserIDAPI, User_ID);
  let profile = result[1].data;
  let user = result[2].data;
  if (result[0].msg === "Thành công") {
    let { id, user_id } = profile;
    let { email, phone } = user;
    let jour_card_id = profile.journalist_card[0]?.id;
    let user_degree_id = profile?.user_degree[0]?.id;
    let {
      personal_history,
      party,
      organization,
      training_fostering,
      reward_discipline,
      family_relationship,
      can_action,
      state,
    } = profile;
    yield put(
      setUserProfileID({ pro_id: id, user_id, jour_card_id, user_degree_id })
    );
    yield put(setStatus({ state, can_action }));
    yield put(setPersonalHistory(personal_history));
    yield put(getParty(party));
    yield put(setOrganization(organization));
    yield put(setTrainingFostering(training_fostering));
    yield put(setRewardDiscipline(reward_discipline));
    yield put(
      setFamilyRelationship(mappingFamilyRelationship(family_relationship))
    );
    let profileUser = mappingProfileAPI(profile);
    profileUser["email"] = email;
    profileUser["soDienThoai"] = phone;
    let { phongBanCVObj } = profileUser;
    // console.log(phongBanCVObj)
    if (phongBanCVObj.length > 0) {
      yield put(addPBCV(phongBanCVObj));
    }
    // console.log(profile)
    yield put(setValues(profileUser));
    yield put(setIsLoading(false));
  } else {
    yield put(setIsNavigate(true));
  }
}

function* updateProfile(payload) {
  try {
    const {
      newValueForm,
      user_id,
      jour_card_id,
      user_degree_id,
      pro_id,
      action,
      work_object_id,
    } = payload.valuesUpdate;
    let { hoTen, email, soDienThoai } = newValueForm;
    let userInfor = { full_name: hoTen, email, phone: soDienThoai };
    let { phongBanCVObj, ...rest } = newValueForm;
    let profile = mappingProfileStep1(newValueForm);
    let depPos = mappingDepartmentPosition(newValueForm);
    let userDegree = mappingUserDegree(newValueForm);
    let jourCard = mappingJournalistCard(newValueForm);
    let workObject = mappingWorkObject(newValueForm);
    let dataToUpdate = {
      profile,
      userDegree,
      jourCard,
      depPos,
      user_id,
      jour_card_id,
      user_degree_id,
      pro_id,
      userInfor,
      workObject,
      work_object_id,
    };
    yield put(setIsNextStep(true));
    yield put(setValues(rest));
    let profileUpdated = yield call(updateProfile_API, dataToUpdate, action);
    let msg = profileUpdated?.data[0]?.msg;
    if (msg === "Thành công") {
      console.log(action);
      yield put(
        setMessageAlert({ type: "success", msg: "Thao tác thành công" })
      );
      let decoded = jwt_decode(TOKEN);
      if (action === "send" || action === "reject") {
        if (+decoded.id === 1) {
          console.log("1");
          yield put(setPathUrl("/profile-service/hr/profile"));
          // yield history.push("/profile-service/hr/profile");
        } else {
          console.log("11");
          yield put(setPathUrl("/"));
        }
      }
      yield put(setIsSubmit(false));
    } else {
      yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }));
      yield put(setIsSubmit(false));
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateProfileActive(payload) {
  const {
    newValueForm,
    user_id,
    jour_card_id,
    user_degree_id,
    pro_id,
    navigate,
    action,
    work_object_id,
  } = payload.valuesUpdate;
  let { phongBanCVObj, ...rest } = newValueForm;
  let profile = mappingProfileStep1(newValueForm);
  let depPos = mappingDepartmentPosition(newValueForm);
  let userDegree = mappingUserDegree(newValueForm);
  let jourCard = mappingJournalistCard(newValueForm);
  let workObject = mappingWorkObject(newValueForm);
  let dataToUpdate = {
    profile,
    userDegree,
    jourCard,
    depPos,
    user_id,
    jour_card_id,
    user_degree_id,
    pro_id,
    action,
    work_object_id,
    workObject,
  };
  yield put(setIsNextStep(true));
  yield put(setValues(rest));
  let profileUpdated = yield call(updateProfileActiveAPI, dataToUpdate);
  let msg = profileUpdated.data[0]?.msg;
  if (msg === "Thành công") {
    if (action === "inactive") {
      yield put(
        setMessageAlert({ type: "success", msg: "Hủy kích hoạt thành công" })
      );
      setTimeout(() => {
        navigate(0);
      }, 1000);
    } else {
      yield put(
        setMessageAlert({ type: "success", msg: "Cập nhật thành công" })
      );
    }
  } else {
    yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }));
    yield put(setIsSubmit(false));
  }
}

function* createProfile(payload) {
  const {
    valuesCreate: { valueForm, navigate },
  } = payload;
  // console.log(valuesCreate)
  let profile = mappingProfileStep1(valueForm);
  let depPos = mappingDepartmentPosition(valueForm);
  let userDegree = mappingUserDegree(valueForm);
  let jourCard = mappingJournalistCard(valueForm);
  let workObject = mappingWorkObject(valueForm);
  let dataToCreate = {
    profile,
    depPos,
    userDegree,
    jourCard,
    email: valueForm.email,
    soDienThoai: valueForm.soDienThoai,
    workObject,
  };
  // console.log(dataToCreate)
  yield put(setValues(valueForm));
  yield put(setIsNextStep(true));
  let result = yield call(createProfile_API, dataToCreate);
  let msg =
    result?.data?.message || result?.data?.detail || result?.data[0]?.msg;
  // console.log(result, msg)
  if (msg === "Thành công") {
    yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }));
    setTimeout(() => {
      navigate("/profile-service/hr/profile");
    }, 1000);
  } else {
    yield put(setMessageAlert({ type: "error", msg }));
    // navigate("/profile-service/hr/profile")
    yield put(setIsSubmit(false));
  }
}

function* getAvatar(payload) {
  try {
    let { user_id } = payload;
    const res = yield call(getAvatar_API, user_id);
    if (res.data !== null || res.data.length > 0) {
      yield put(setResources(res.data));
      let avatar = res.data;
      let indexAvatar = avatar.findLastIndex(
        (resoures) => resoures.type === "3x4"
      );
      // if(indexAvatar !== -1 && avatar[indexAvatar]?.resource?.content !== null){
      if (indexAvatar !== -1 && avatar[indexAvatar]?.path !== null) {
        let path = avatar[indexAvatar].path;
        yield put(setAvatar(JSON.parse(path).toString()));
      } else {
        yield put(setAvatar(""));
      }
      // let index = avatar.resource_content.length - 1;
    } else {
      yield put(setAvatar(""));
    }
  } catch (error) {
    console.log(error);
  }
  // console.log(content)
}




function* onlyCreateProfile(payload) {
  let { valueForm, user_id, navigate } = payload.valuesCreate;
  // console.log(valueForm, user_id)
  let profile = mappingProfileStep1(valueForm);
  let depPos = mappingDepartmentPosition(valueForm);
  let userDegree = mappingUserDegree(valueForm);
  let jourCard = mappingJournalistCard(valueForm);
  let workObject = mappingWorkObject(valueForm);
  let dataToCreate = {
    profile,
    depPos,
    userDegree,
    jourCard,
    user_id,
    workObject,
  };
  // console.log(dataToCreate)
  yield put(setValues(valueForm));
  yield put(setIsNextStep(true));
  let result = yield call(onlyCreateProfileAPI, dataToCreate);
  let msg = result[0]?.msg;
  if (msg === "Thành công") {
    yield put(setMessageAlert({ type: "success", msg: "Thao tác thành công" }));
    navigate("/profile-service/hr/profile");
  } else {
    yield put(setMessageAlert({ type: "error", msg: "Thao tác thất bại" }));
    navigate("/profile-service/hr/profile");
  }
}
function* exportExcelEmp(payload) {
  console.log(payload)
  try {
    const res = yield call(exportExcel);
    console.log(res)
    console.log(payload)
  } catch (error) {
    console.log(error)
    
  }
    // console.log(content)
  }
function* deleteDepPos(payload) {
  let { dep_pos_id } = payload;
  // console.log(dep_pos_id)
  yield call(deleteDepPosAPI, dep_pos_id);
}

function* getProfileByTOKEN() {
  let result_token = yield call(getProfileByToken);
  if (result_token.message === "Success") {
    let proID = result_token.data.profile.id;
    let { email, phone: soDienThoai } = result_token.data;
    const {
      status,
      data: { data, message },
    } = yield call(getProfileByID_API, proID);
    if (status === 200 && message === "Success") {
      // console.log(data)
      let { id, user_id } = data;
      let jour_card_id = data.journalist_card[0]?.id;
      let user_degree_id = data?.user_degree[0]?.id;
      let work_object_id = data?.work_object[0]?.id;
      let {
        personal_history,
        party,
        organization,
        training_fostering,
        reward_discipline,
        family_relationship,
        can_action,
        state,
      } = data;
      // put pro_id và user_id lên reducer quản lý
      yield put(
        setUserProfileID({
          pro_id: id,
          user_id,
          jour_card_id,
          user_degree_id,
          work_object_id,
        })
      );
      yield put(setStatus({ state, can_action }));
      yield put(setPersonalHistory(personal_history));
      yield put(getParty(party));
      yield put(setOrganization(organization));
      yield put(setTrainingFostering(training_fostering));
      yield put(setRewardDiscipline(reward_discipline));
      yield put(
        setFamilyRelationship(mappingFamilyRelationship(family_relationship))
      );
      // Thành công thì put lên reducer quản lý => render lại trang
      let profile = mappingProfileAPI(data);
      profile["email"] = email;
      profile["soDienThoai"] = soDienThoai;
      let { phongBanCVObj } = profile;
      // console.log(phongBanCVObj)
      if (phongBanCVObj.length > 0) {
        yield put(addPBCV(phongBanCVObj));
      }
      // console.log(profile)
      yield put(setValues(profile));
      yield put(setIsLoading(false));
    } else {
      // failed thì chuyển trang đến 404 Page (url fail: /api/profile/:id
      // id trên url này không tồn tại trên DB )
      yield put(setIsNavigate(true));
    }
  }
}

function* deleteResource(payload) {
  let { resource_id } = payload;
  yield call(deleteResourceAPI, resource_id);
}

export default function* Profile() {
  yield takeEvery(GET_PROFILE_BY_ID, getProfileByID);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
  yield takeLatest(UPDATE_PROFILE_ACTIVE, updateProfileActive);
  yield takeLatest(CREATE_PROFILE, createProfile);
  yield takeLatest(GET_AVATAR, getAvatar);
  yield takeLatest(EXPORT_EXCEL, exportExcelEmp);
  yield takeLatest(ONLY_CREATE_PROFILE, onlyCreateProfile);
  yield takeLatest(DELETE_DEP_POS, deleteDepPos);
  yield takeLatest(GET_PROFILE_BY_USER_ID, getProfileByUserID);
  yield takeLatest(GET_PROFILE_BY_TOKEN, getProfileByTOKEN);
  yield takeLatest(DELETE_RESOURCE, deleteResource);
}
