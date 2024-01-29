import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import cartSaga from "./cartSaga";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:rootReducer ,
    middleware: () => new Tuple(sagaMiddleware)
})

sagaMiddleware.run(cartSaga)

export default store