import {SET_STORE, START_REQUEST, HANDLE_ERROR} from "./actions.js"

const initialState = {
    isLoading: false, 
    storeData: [],
    error: "",
}

const reducer = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case HANDLE_ERROR: return {...state, error: payload, isLoading: false}
        case SET_STORE: return {...state, storeData: payload, isLoading: false}
        case START_REQUEST: return {...state, isLoading: true}
        default:
            return state
    }
}

export default reducer