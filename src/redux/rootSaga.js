import { all, call } from "redux-saga/effects";
import Profile from "./profile.middleware";
import Step1 from "./middleware/step1.middleware"

export default function* rootSaga(){
    yield all([
        call(Profile),
        call(Step1)
    ])
}