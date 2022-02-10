import axiosWithAuth from "../hooks/useBackend";

// action that gets category products
export const START_REQUEST = "START_REQUEST"
const startRequest = () => ({
    type: START_REQUEST
})

export const HANDLE_ERROR = "HANDLE_ERROR"
const handleError = error => ({
    type: HANDLE_ERROR,
    payload: error
})

export const SET_STORE = "SET_STORE"
const setStore = store => ({
    type: SET_STORE,
    payload: store
})


export const getStore = () => async dispatch => {
    try {
        dispatch(startRequest())
        const { data } = await axiosWithAuth().get("/api/products/category/products")
        dispatch(setStore(data))
    } catch(err) {
        dispatch(handleError(err))
    }
}

export const CREATE_PRODUCT = "CREATE_PRODUCT"

export const createProduct = product => async dispatch => {
    try {
        dispatch(startRequest())
        await axiosWithAuth().post("/api/products/create/products", product)
        dispatch(getStore())
    } catch(err) {
        dispatch(handleError(err))
    }
}