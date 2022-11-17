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

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        stepsReducer: stepsSlice,
        steps1Reducer: steps1Slice,
        step2Reducer: step2Slice,
        step3Reducer: step3Slice,
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