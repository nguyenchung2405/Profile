import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./rootSaga";
import steps1Slice from "./Steps/step1/step1Slice";
import stepsSlice from "./Steps/stepsSlice";
import userListSlice from "./Slice/userList"
import loadingSlice from "./Slice/loading";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        stepsReducer: stepsSlice,
        steps1Reducer : steps1Slice,
        userListReducer: userListSlice,
        loadingReducer: loadingSlice
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga);