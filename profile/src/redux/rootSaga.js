import { all, call } from "redux-saga/effects";
import Profile from "./profile.middleware";
import Step1 from "./middleware/step1.middleware"
import Table from "./middleware/table.middleware"
import Department from "./middleware/department.middleware.js"
import Positions from "./middleware/position.middleware";
import step2Middleware from "./middleware/step2.middleware";
import step3Middleware from "./middleware/step3.middleware";
import step4Middleware from "./middleware/step4.middleware";
import step5Middleware from "./middleware/step5.middleware";
import step6Middleware from "./middleware/step6.middleware";

export default function* rootSaga() {
        yield all([
                call(Profile),
                call(Step1),
                call(Table),
                call(Department),
                call(Positions),
                call(step2Middleware),
                call(step3Middleware),
                call(step4Middleware),
                call(step5Middleware),
                call(step6Middleware),
        ])
}