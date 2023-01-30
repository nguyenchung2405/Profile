import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PERMISSION, DELETE_PERMISSION, DELETE_PERMISSION_DEP_POS, DELETE_PERMISSION_POS, GET_PERMISSION_DEP_POS, GET_PERMISSION_DEP_POS_LIST, GET_PERMISSION_LIST, GET_PERMISSION_POSITION, GET_TABLE_MANAGEMENT, POST_PERMISSION_DEP_POS, POST_PERMISSION_POS, UPDATE_PERMISSION } from "../../title/title";
import { createPermissionAPI, deletePermissDepPosAPI, deletePermissionAPI, deletePermissionPositionAPI, getPermissionDepPosAPI, getPermissionDepPosListAPI, getPermissionListAPI, getPermissionPosListAPI, getTableManagementAPI, postPermissDepPosAPI, postPermissionPositionAPI, updatePermissionAPI } from "../API/permissionAPI";
import { addPermission, deletePermissionSlice, setMessageAlert, setPermissionDepPosList, setPermissionHave, setPermissionList, setPermissionNot, setTableManagement, updatePermissionSlice } from "../Slice/permissionSlice";

function* getPermissionList(payload){
    let {data} = payload;
    let result = yield call(getPermissionListAPI, data);
    let {code, data: dataResponse, metadata: {total_items}} = result;
    if(code && code == 200){
        yield put(setPermissionList({dataResponse, total: total_items}));
    }
}

function* createPermission(payload){
    let {data} = payload;
    let result = yield call(createPermissionAPI, data);
    let {code, data: dataResponse} = result;
    if(code == 200){
        yield put(addPermission(dataResponse));
        yield put(setMessageAlert({type: "success", msg: "Tạo thành công"}));
    } else {
        yield put(setMessageAlert({type: "error", msg: "Tạo thất bại"}));
    }
}

function* updatePermission(payload){
    let {data} = payload;
    let result = yield call(updatePermissionAPI, data);
    let {code, data: dataResponse} = result;
    if(code == 200){
        yield put(updatePermissionSlice(dataResponse));
        yield put(setMessageAlert({type: "success", msg: "Cập nhật thành công"}));
    } else {
        yield put(setMessageAlert({type: "error", msg: "Cập nhật thất bại"}));
    }
};

function* deletePermission(payload){
    let {data: per_id} = payload;
    let result = yield call(deletePermissionAPI, per_id);
    let {code, data: dataResponse} = result;
    if(code == 200){
        yield put(deletePermissionSlice(dataResponse));
        yield put(setMessageAlert({type: "success", msg: "Cập nhật thành công"}));
    } else {
        yield put(setMessageAlert({type: "error", msg: "Cập nhật thất bại"}));
    }
}

function* getPermissionPosition(payload){
    let {data} = payload;
    let result = yield call(getPermissionPosListAPI, data);
    if(result[0].msg === "Thành công"){
        yield put(setPermissionHave(result[1]));
        yield put(setPermissionNot(result[2]));
    }
}

function* getTableManagement(){
    let result = yield call(getTableManagementAPI);
    let {message , data} = result;
    if(message === "Successfully"){
        yield put(setTableManagement(data));
    }
}

function* deletePermissionPosition(payload){
    let {deleteArr, pos_mana_id} = payload.data;
    yield call(deletePermissionPositionAPI, deleteArr, pos_mana_id);
    let result = yield call(getPermissionPosListAPI, pos_mana_id);
    if(result[0].msg === "Thành công"){
        yield put(setPermissionHave(result[1]));
        yield put(setPermissionNot(result[2]));
    }
}

function* postPermissionPosition(payload){
    let {postArr, pos_mana_id} = payload.data;
    yield call(postPermissionPositionAPI, postArr, pos_mana_id);
    let result = yield call(getPermissionPosListAPI, pos_mana_id);
    if(result[0].msg === "Thành công"){
        yield put(setPermissionHave(result[1]));
        yield put(setPermissionNot(result[2]));
    }
}

function* getPermissionDepPos(payload){
    console.log(payload)
    let dep_id = payload?.data?.dep_id;
    let pos_id = payload?.data?.pos_id;
    if(dep_id && pos_id){
        let result = yield call(getPermissionDepPosAPI, dep_id, pos_id);
        yield put(setPermissionHave(result[1]));
        yield put(setPermissionNot(result[2]));
    } else {
        let result = yield call(getPermissionDepPosAPI, 0,0);
        yield put(setPermissionHave(result[1]));
        yield put(setPermissionNot(result[2]));
    }
}

function* deletePermissionDepPos(payload){
    let {deleteArr, depPos} = payload.data;
    let data = {
        department_id: depPos.dep_id,
        position_management_id: depPos.pos_id,
        permission_ids: deleteArr
    };
    if(typeof +data.department_id === "number" && typeof +data.position_management_id === "number"){
        yield call(deletePermissDepPosAPI, data);
    }
}

function* postPermissionDepPos(payload){
    let {postArr, depPos} = payload.data;
    let data = {
        department_id: depPos.dep_id,
        position_management_id: depPos.pos_id,
        permission_ids: postArr
    };
    if(typeof +data.department_id === "number" && typeof +data.position_management_id === "number"
    && data.department_id !== "" && data.position_management_id !== ""){
        yield call(postPermissDepPosAPI, data);
    } else {
        yield put(setMessageAlert({type: "error", msg: "Tạo thất bại"}));
    }
}

function* getPermissionDepPosList(payload){
    let {page, pageNumber} = payload.data;
    let result = yield call(getPermissionDepPosListAPI, page, pageNumber);
    let {data: dataResponse, metadata: {total_items: total}} = result;
    yield put(setPermissionDepPosList({dataResponse, total}));
}

export default function* PermissionMiddleware(){
    yield takeLatest(GET_PERMISSION_LIST, getPermissionList);
    yield takeLatest(CREATE_PERMISSION, createPermission)
    yield takeLatest(UPDATE_PERMISSION, updatePermission)
    yield takeLatest(DELETE_PERMISSION, deletePermission)
    // Middleware của Permission Position
    yield takeLatest(GET_PERMISSION_POSITION, getPermissionPosition);
    yield takeLatest(DELETE_PERMISSION_POS, deletePermissionPosition);
    yield takeLatest(POST_PERMISSION_POS, postPermissionPosition);
    // Middleware của Table management
    yield takeLatest(GET_TABLE_MANAGEMENT, getTableManagement)
    yield takeLatest(GET_PERMISSION_DEP_POS_LIST, getPermissionDepPosList)
    // Middleware của Permission Dep Pos
    yield takeLatest(GET_PERMISSION_DEP_POS, getPermissionDepPos)
    yield takeLatest(DELETE_PERMISSION_DEP_POS, deletePermissionDepPos)
    yield takeLatest(POST_PERMISSION_DEP_POS, postPermissionDepPos)
}