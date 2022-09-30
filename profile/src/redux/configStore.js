import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./rootSaga";
import steps1Slice from "./Steps/step1/step1Slice";
import stepsSlice from "./Steps/stepsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        stepsReducer: stepsSlice,
        steps1Reducer : steps1Slice,
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga);