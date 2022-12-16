import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PERMISSION, DELETE_PERMISSION, GET_PERMISSION_LIST, GET_PERMISSION_POSITION, UPDATE_PERMISSION } from "../../title/title";
import { createPermissionAPI, deletePermissionAPI, getPermissionListAPI, updatePermissionAPI } from "../API/permissionAPI";
import { addPermission, deletePermissionSlice, setMessageAlert, setPermissionList, updatePermissionSlice } from "../Slice/permissionSlice";

function* getPermissionList(payload){
    let {data} = payload;
    let result = yield call(getPermissionListAPI, data);
    let {code, data: dataResponse, metadata: {total_items}} = result;
    if(code == 200){
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
    console.log(data)
}

export default function* PermissionMiddleware(){
    yield takeLatest(GET_PERMISSION_LIST, getPermissionList);
    yield takeLatest(CREATE_PERMISSION, createPermission)
    yield takeLatest(UPDATE_PERMISSION, updatePermission)
    yield takeLatest(DELETE_PERMISSION, deletePermission)
    // Middleware của Permission Position
    yield takeLatest(GET_PERMISSION_POSITION, getPermissionPosition);
}