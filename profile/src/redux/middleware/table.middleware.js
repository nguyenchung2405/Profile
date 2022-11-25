import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USER_LIST } from "../../title/title";
import { getUserList_API } from "../API/step1API";
import { setUserList } from "../Slice/userList"
import { setIsLoading } from "../Slice/loading"

function* getUserList(payload) {
    let { table: { page, pageNumber } } = payload;
    // Bóc tách status, data và total từ API rồi đưa lên Reducer quản lý
    let result = yield call(getUserList_API, page, pageNumber);
    // console.log(result)
    let { data: userList, metadata: {total_items: total}} = result;
    // console.log(code, userList, total)
    // let data = yield call(getUserList_API,page,pageNumber);
    // console.log(userList, status, total)
    if (userList.length > 0) {
        yield put(setUserList({ userList, total }))
        yield put(setIsLoading(false))
    }
}

export default function* table() {
    yield takeLatest(GET_USER_LIST, getUserList)
}