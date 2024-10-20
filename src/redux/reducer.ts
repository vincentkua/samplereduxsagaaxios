import { combineReducers } from "redux";
import { ADD_CARTS, DELETE_CARTS, GET_CARTS } from "./constant";
const cartsReducer = (data = [{
    id: 1,
    name: "Orange",
    price: 30,
  }], action:any) => {
  switch (action.type) {
    case GET_CARTS:
      console.log("reducer - get carts called");
      console.log(data)
      return data;
    case ADD_CARTS:
        console.log("reducer - add carts called");
        return [...data , action.data];
    case DELETE_CARTS:
        console.log("reducer - delete carts called");
        const newcart = data.filter(x=> x.id!==action.data)
        return newcart;
    default:
      return data;
  }
};
const rootReducer = combineReducers({
    cartsReducer,
});
export default rootReducer;

// Create RootState type based on the rootReducer
export type RootReducerState = ReturnType<typeof rootReducer>;