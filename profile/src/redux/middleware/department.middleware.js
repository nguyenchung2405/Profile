import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_DEPARTMENT, GET_DEPARTMENT_INFOR, GET_DEPARTMENT_LIST, UPDATE_DEPARTMENT } from "../../title/title";
import { createDepartmentAPI, getDepInforAPI, getDepPosAPI, updateDepartmentInforAPI } from "../API/department";
import { setDepInfor, setDepList } from "../Slice/departments.slice";
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
    yield call(updateDepartmentInforAPI, data)
}

function* createDepartment(payload){
    let {data} = payload;
    // console.log(data)
    yield call(createDepartmentAPI, data)
}

export default function* Department(){
    yield takeLatest(GET_DEPARTMENT_LIST, getDepList)
    yield takeLatest(GET_DEPARTMENT_INFOR, getDepartmentInfor)
    yield takeLatest(UPDATE_DEPARTMENT, updateDepartment)
    yield takeLatest(CREATE_DEPARTMENT, createDepartment)
}