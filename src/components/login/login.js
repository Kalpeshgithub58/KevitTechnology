import React, { useState } from "react";

const Login = ({ lable, emailLable, passLable, onHandleSubmit }) => {
  //State Management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(email, password);
  };

  return (
    <>
      <h2>{lable}</h2>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>{emailLable}</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>{passLable}</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Login;
