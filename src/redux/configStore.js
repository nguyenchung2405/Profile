import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./rootSaga";
import step1Slice from "./Steps/step1/step1Slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        step1Reducer : step1Slice
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga);