import { call, put, takeLatest } from "redux-saga/effects";
import { GET_DEP_POS_TO_SEARCH, GET_USER_LIST, SEARCH } from "../../title/title";
import { getUserList_API } from "../API/step1API";
import { setUserList } from "../Slice/userList"
import { setIsLoading } from "../Slice/loading"
import { getDepPosToSearch } from "../API/department";
import { setDepList, setPosList } from "../Slice/tableSlice";
import { searchAPI } from "../API/tableProfileAPI";
import { setDepPosList } from "../Slice/permissionSlice";
import { setMessageAlert } from "../Steps/stepsSlice";

function* getUserList(payload) {
    let { table: { page, pageNumber } } = payload;
    // Bóc tách status, data và total từ API rồi đưa lên Reducer quản lý
    let result = yield call(getUserList_API, page, pageNumber);
    let { data: userList, metadata: {total_items: total}} = result;
    // console.log(code, userList, total)
    // let data = yield call(getUserList_API,page,pageNumber);
    // console.log(userList, status, total)
    if (userList.length > 0) {
        yield put(setUserList({ userList, total }))
        yield put(setIsLoading(false))
    } else {
        yield put(setMessageAlert({ type: "error", msg: "Tải trang thất bại" }))
        yield put(setIsLoading(false))
    }
}

function* getDepPosSearch(){
    let result = yield call (getDepPosToSearch);
    let {data: depList} = result[0].data;
    let {data: posList} = result[1].data;
    yield put(setDepList(depList))
    yield put(setPosList(posList))
    yield put(setDepPosList([depList, posList]))
}

function* search(payload){
    let {search, page, pageNumber} = payload.data;
    let result = yield call(searchAPI, search, page, pageNumber)
    // console.log(result)
    let {data: searchList, metadata: {total_items: total}} = result;
    if(searchList.length > 0){
        yield put(setUserList({ userList: searchList, total }))
        yield put(setIsLoading(false))
    } else {
        yield put(setIsLoading(false))
    }
}

export default function* table() {
    yield takeLatest(GET_USER_LIST, getUserList)
    yield takeLatest(GET_DEP_POS_TO_SEARCH, getDepPosSearch)
    yield takeLatest(SEARCH, search)
}