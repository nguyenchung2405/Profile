import { call, takeLatest, put } from "redux-saga/effects";
import { GET_DEPARTMENT_LIST } from "../../title/title";
import { getDepPosAPI } from "../API/department";
import { setDepList } from "../Slice/departments.slice";
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

export default function* Department(){
    yield takeLatest(GET_DEPARTMENT_LIST, getDepList)
}