import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga);