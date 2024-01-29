import { takeEvery, put } from "redux-saga/effects";
import {
  SAGA_GET,
  SAGA_POST,
  SAGA_DELETE,
  SET_CARTS,
  ADD_CARTS,
  DELETE_CARTS,
  AXIOS_GET,
  AXIOS_POST,
  AXIOS_DELETE
} from "./constant";
import api from "./cartsApi";

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
function* axiosGet(): Generator<any, any, any> {
  console.log("Saga axiosGet called...");
  try {
    const res = yield api.get("/carts");
    console.log("Axios response >>>", res);
    console.log("Axios data >>>", res.data);
    yield put({
      type: SET_CARTS,
      data: res.data,
    });
  } catch (error) {
    console.error(error);
  }
}
function* axiosPost(action: any): Generator<any, any, any> {
  try {
    let response = yield api.post("/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.data),
    });
    console.log("Post Result", response.data);
    yield put({
      type: ADD_CARTS,
      data: action.data,
    });
  } catch (error) {
    console.error(error);
  }
}
function* axiosDelete(action: any): Generator<any, any, any> {
  try {
    let response = yield api.delete("/carts/" + action.id, {
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
  yield takeEvery(AXIOS_GET,axiosGet)
  yield takeEvery(AXIOS_POST,axiosPost)
  yield takeEvery(AXIOS_DELETE,axiosDelete)
}
export default cartSaga;
