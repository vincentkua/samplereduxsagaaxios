import { ADD_CARTS, DELETE_CARTS, GET_CARTS } from "./constant"
export const getCarts = () => {
    console.log("action - get carts called")
    return {
        type : GET_CARTS
    }
}
export const addCarts = (data:any) => {
    console.log("action - add carts called")
    return {
        type : ADD_CARTS ,
        data : data
    }
}
export const deleteCarts = (id: number) => {
    console.log("action - delete carts called")
    return {
        type : DELETE_CARTS,
        data: id
    }
}
