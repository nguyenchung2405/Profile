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
import step8Middleware from "./middleware/step8.middleware";
import step7Middleware from "./middleware/step7.middleware";
import step9Middleware from "./middleware/step9.middleware";
import PermissionMiddleware from "./middleware/permission.middleware";

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
                call(step7Middleware),
                call(step8Middleware),
                call(step9Middleware),
                call(PermissionMiddleware)
        ])
}