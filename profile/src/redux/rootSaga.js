import { all, call } from "redux-saga/effects";
import Profile from "./profile.middleware";
import Step1 from "./middleware/step1.middleware"
import Table from "./middleware/table.middleware"
import Department from "./middleware/department.middleware.js"

export default function* rootSaga(){
    yield all([
        call(Profile),
        call(Step1),
        call(Table),
        call(Department)
    ])
}