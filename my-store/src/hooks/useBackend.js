import axios from "axios";
const { REACT_APP_BACKEND_URI } = process.env;
console.log(process.env);
const useBackend = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      authorization: token,
    },
  });
};

export default useBackend;
