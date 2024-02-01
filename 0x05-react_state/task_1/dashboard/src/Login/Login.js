import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);

  useEffect(() => {
    if (inputs.email !== "" && inputs.password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) setEnableSubmit(false);
    }
  } , [inputs.email, inputs.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn((prev) => ({ ...prev, isLoggedIn: true }));
  };

  const handleChangeEmail = (e) => {
    e.persist();
    setInputs((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleChangePassword = (e) => {
    e.persist();
    setInputs((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleSubmit}>
        <div className={css(styles.appLogin)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={inputs.email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={inputs.password}
            onChange={handleChangePassword}
          />
          <input type="submit" className={css(styles.loginButton)} value="OK" disabled={!enableSubmit}/>
        </div>
      </form>
    </div>
  );
}

export default Login;

const styles = StyleSheet.create({
  appBody: {
    fontFamily: "Poppins, sans-serif",
    color: "#000000",
    overflow: "none",
  },
  paragraph: {
    fontWeight: 600,
    marginTop: "5%",
    marginLeft: "5%",
  },
  appLogin: {
    display: "flex",
    gap: "1.5%",
    marginLeft: "5%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      border: "none",
      width: "35%",
    },
  },
  loginButton: {
    backgroundColor: "white",
    border: "1px solid #000",
    borderRadius: "2px",
    boxShadow: "0 0 1px 1px #000",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
    "@media (max-width: 900px)": {
      marginTop: "1.5%",
      width: "15%",
    },
  },
});
