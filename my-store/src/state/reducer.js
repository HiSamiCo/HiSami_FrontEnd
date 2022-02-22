import {SET_STORE, START_REQUEST, HANDLE_ERROR, SET_ADMIN } from "./actions.js"

const initialState = {
    isLoading: false, 
    storeData: [],
    error: "",
    isAdmin: false,
}

const reducer = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case HANDLE_ERROR: return {...state, error: payload, isLoading: false}
        case SET_STORE: return {...state, storeData: payload, isLoading: false}
        case START_REQUEST: return {...state, isLoading: true}
        case SET_ADMIN: return {...state, isAdmin: payload}
        default:
            return state
    }
}

export default reducer