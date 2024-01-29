import { ADD_CARTS, DELETE_CARTS, GET_CARTS, SAGA_DELETE, SAGA_GET, SAGA_POST } from "./constant"
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
export const sagaGet = () => {
    console.log("action - saga get called")
    return {
        type : SAGA_GET
    }
}
export const sagaPost = (data:any) => {
    console.log("action - saga Post called")
    return {
        type : SAGA_POST ,
        data : data
    }
}
export const sagaDelete = (id: number) => {
    console.log("action - sagaDelete called")
    return {
        type : SAGA_DELETE,
        id: id
    }
}