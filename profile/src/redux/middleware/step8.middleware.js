import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_FAMILY_RELATIONSHIP, GET_DISTRICTS_STEP8, UPDATE_FAMILY_RELATIONSHIP } from "../../title/title";
import { createFamilyRelationshipAPI, getDistrictsStep8API, updateFamilyRelationshipAPI } from "../API/step8API";
import { addFamilyRelationship, setNoiOHienTaiQuan, updateFamilyRelationshipSlice } from "../Steps/step8Slice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* getDistrictsStep8(payload){
    let {districts} = yield call(getDistrictsStep8API ,payload.code);
    yield put(setNoiOHienTaiQuan(districts));
}

function* createFamilyRelationship(payload){
    // Vì step 7,8 ,9 dùng chung API nên call cùng 1 API này
    // và vì step 8 làm trước nên field residence này dựa trên step 8 làm
    // khi có data từ server sẽ dùng hàm mappping chuyển residence sang noiOHienTai
    // áp dụng cho cả 3 step 7, 8 , 9.
    // Step nào thì lọc type theo step đó rồi đổ residence ra cho user thấy
    let {data} = payload;
    let result = yield call(createFamilyRelationshipAPI, data);
    let {code, message, data: dataResponse} = result;
    if(code == 200, message === "Success"){
        yield put(addFamilyRelationship(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

function* updateFamilyRelationship(payload){
    let {data} = payload;
    let result = yield call(updateFamilyRelationshipAPI, data);
    let {code, message, data: dataResponse} = result;
    console.log(result)
    if(code == 200, message === "Success"){
        yield put(updateFamilyRelationshipSlice(dataResponse))
        yield put(setMessageAlert({type: "success", msg: "Thao tác thành công"}))
    } else {
        yield put(setMessageAlert({type: "error", msg: "Thao tác thất bại"}))
    }
}

export default function* step8Middleware(){
    yield takeLatest(GET_DISTRICTS_STEP8, getDistrictsStep8)
    yield takeLatest(CREATE_FAMILY_RELATIONSHIP, createFamilyRelationship)
    yield takeLatest(UPDATE_FAMILY_RELATIONSHIP, updateFamilyRelationship)
}