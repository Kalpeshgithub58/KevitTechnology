import React from "react";
import Login from "./login";
import { login } from "../StaticFile";
import kevitApi from "../kevitApi";

const App = ({ history }) => {
  const onSubmitForm = (email, password) => {
    kevitApi
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          if (response.data) {
            history.push("/order", response.data.data.token);
          }
        },
        (err) => {
          alert("Please Enter Valid Email ans Password ");
        }
      );
  };

  return (
    <div className=" ui container">
      <Login
        lable={login.lable}
        emailLable={login.emailLabel}
        passLable={login.passLable}
        onHandleSubmit={onSubmitForm}
      />
    </div>
  );
};
export default App;
