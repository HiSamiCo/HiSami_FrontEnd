import React from "react";
import useBackend from "../../../hooks/useBackend";
import Form from "../../common/Form";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  email: "",
  password: "",
};

export default function Login() {
  const api = useBackend();
  const { push } = useHistory();
  const submit = async (formValues) => {
    try {
      const newAccount = Object.keys(formValues).reduce((obj, key) => {
        obj[key] = formValues[key].trim();
        return obj;
      }, {});
      const res = await api.post("/api/users/login", newAccount);
      const { token } = res.data;
      localStorage.setItem("token", token);
      push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form title="Login:" initialState={initialFormValues} submit={submit} />
  );
}
