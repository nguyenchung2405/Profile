import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./rootSaga";
import steps1Slice from "./Steps/step1/step1Slice";
import stepsSlice from "./Steps/stepsSlice";
import userListSlice from "./Slice/userList"
import loadingSlice from "./Slice/loading";
import departmentsSlice from "./Slice/departments.slice"
import tablePosListSlice from "./Slice/positions.slice"
import step2Slice from "./Steps/step2.slice";
import step3Slice from "./Steps/step3.slice";
import step4Slice from "./Steps/step4.slice";
import step5Slice from "./Steps/step5.slice";
import step6Slice from "./Steps/step6Slice";
import step8Slice from "./Steps/step8Slice";
import step7Slice from "./Steps/step7Slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        stepsReducer: stepsSlice,
        steps1Reducer: steps1Slice,
        step2Reducer: step2Slice,
        step3Reducer: step3Slice,
        step4Reducer: step4Slice,
        step5Reducer: step5Slice,
        step6Reducer: step6Slice,
        step7Reducer: step7Slice,
        step8Reducer: step8Slice,
        userListReducer: userListSlice,
        loadingReducer: loadingSlice,
        departmentsReducer: departmentsSlice,
        positionReducer: tablePosListSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga);