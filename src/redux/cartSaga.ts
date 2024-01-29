import { takeEvery, put } from "redux-saga/effects";
import {
  SAGA_GET,
  SAGA_POST,
  SAGA_DELETE,
  SET_CARTS,
  ADD_CARTS,
  DELETE_CARTS,
} from "./constant";
function* sagaGet(): Generator<any, any, any> {
  console.log("Saga sageGet called...");
  try {
    let data = yield fetch("http://localhost:8000/carts");
    data = yield data.json();
    console.log("Saga data >>>", data);
    yield put({
      type: SET_CARTS,
      data: data,
    });
  } catch (error) {
    console.error(error);
  }
}
function* sagaPost(action: any): Generator<any, any, any> {
  try {
    let response = yield fetch("http://localhost:8000/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.data),
    });
    const data = yield response.json();
    console.log("Post Result", data);
    yield put({
      type: ADD_CARTS,
      data: data,
    });
  } catch (error) {
    console.error(error);
  }
}
function* sagaDelete(action: any): Generator<any, any, any> {
  try {
    let response = yield fetch("http://localhost:8000/carts/" + action.id, {
      method: "DELETE",
    });
    console.log("Delete Result", response);
    if (response.status === 200) {
      yield put({
        type: DELETE_CARTS,
        data: action.id,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
function* cartSaga() {
  yield takeEvery(SAGA_GET, sagaGet);
  yield takeEvery(SAGA_POST, sagaPost);
  yield takeEvery(SAGA_DELETE, sagaDelete);
}
export default cartSaga;
