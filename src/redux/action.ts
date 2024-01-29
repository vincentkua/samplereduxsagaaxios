import { ADD_CARTS, AXIOS_DELETE, AXIOS_GET, AXIOS_POST, DELETE_CARTS, GET_CARTS, SAGA_DELETE, SAGA_GET, SAGA_POST } from "./constant"
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
export const axiosGet = () => {
    console.log("action - axios get called")
    return {
        type : AXIOS_GET
    }
}
export const axiosPost= (data:any) => {
    console.log("action - axios post called")
    return {
        type : AXIOS_POST,
        data : data
    }
}
export const axiosDelete = (id: number) => {
    console.log("action - axios delete called")
    return {
        type : AXIOS_DELETE,
        id: id
    }
}