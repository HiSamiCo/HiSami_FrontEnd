import axios from "axios";
// const { REACT_APP_BACKEND_URI } = process.env;
console.log(process.env);
const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://hisamibackend.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
