import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_DEPARTMENT, DELETE_DEPARTMENT, GET_DEPARTMENT_INFOR, GET_DEPARTMENT_LIST, SEARCH_DEPARTMENT, UPDATE_DEPARTMENT } from "../../title/title";
import { createDepartmentAPI, deleteDepartmentAPI, getDepInforAPI, getDepPosAPI, searchDepartmentAPI, updateDepartmentInforAPI } from "../API/department";
import { addDepartmentSlice, deleteDepartmentSlice, setDepInfor, setDepList, setMessage, updateDepartmentSlice } from "../Slice/departments.slice";
import { setIsLoading } from "../Slice/loading";

function* getDepList(payload){
    // đang làm tới chỗ call tới middleware => tạo API rồi call qua proxy => gọi API ở proxy rồi trả về
    let {page,pageNumber} = payload.table;
    // console.log(page,pageNumber)
    let {code,message, data: tableList, metadata: {total_items : total} } = yield call(getDepPosAPI,page,pageNumber)
    // console.log(code,message, tableList, total)
    if(code == 200 && message === "Success"){
        yield put(setDepList({tableList, total}))
        yield put(setIsLoading(false))
    }
}

function* getDepartmentInfor(payload){
    let {dep_id} = payload;
    let {code, message, data} = yield call(getDepInforAPI, dep_id)
    if(code == 200 && message === "Success"){
        yield put(setDepInfor(data))
    }
}

function* updateDepartment(payload){
    let {data} = payload;
    let result = yield call(updateDepartmentInforAPI, data)
    let {code, message, data: dataResponseFromServer} = result;
    if(code == 200 && message === "Success"){
        yield put(updateDepartmentSlice(dataResponseFromServer))
        yield put(setMessage({message: "thành công"}))
    } else {
        yield put(setMessage({message: "thất bại"}))
    }
}

function* createDepartment(payload){
    let {data} = payload;
    // console.log(data)
    let result = yield call(createDepartmentAPI, data)
    // console.log(result)
    let {code, message, data: dataResponseFromServer} = result;
    if(code == 200 && message === "Success"){
        // console.log(dataResponseFromServer)
        yield put(addDepartmentSlice(dataResponseFromServer))
        yield put(setMessage({message: "thành công"}))
    } else {
        yield put(setMessage({message: "thất bại"}))
    }
};

function* searchDepartment(payload){
    let {page,pageNumber, value} = payload.table;
    let {code,message, data: tableList, metadata: {total_items : total} } = yield call(searchDepartmentAPI,page,pageNumber, value)
    // console.log(code,message, tableList, total)
    if(code == 200 && message === "Success"){
        yield put(setDepList({tableList, total}))
        yield put(setIsLoading(false))
    }
}

function* deleteDepartment(payload){
    let {dep_id} = payload;
    let result = yield call(deleteDepartmentAPI, dep_id);
    let {code,message, data} = result;
    console.log(code,message, data)
    if(+code === 200 && message === "Success"){
        yield put(deleteDepartmentSlice(data))
        yield put(setMessage({message: "Xóa thành công"}))
    } else {
        yield put(setMessage({message: "Xóa thất bại"}))
    }
}

export default function* Department(){
    yield takeLatest(GET_DEPARTMENT_LIST, getDepList)
    yield takeLatest(GET_DEPARTMENT_INFOR, getDepartmentInfor)
    yield takeLatest(UPDATE_DEPARTMENT, updateDepartment)
    yield takeLatest(CREATE_DEPARTMENT, createDepartment)
    yield takeLatest(SEARCH_DEPARTMENT, searchDepartment);
    yield takeLatest(DELETE_DEPARTMENT, deleteDepartment);
}