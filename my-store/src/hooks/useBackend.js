import axios from "axios"
const { REACT_APP_BACKEND_URI } = process.env

const useBackend = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL: REACT_APP_BACKEND_URI,
        headers: {
            authorization: token
        },
    })
}

export default useBackend