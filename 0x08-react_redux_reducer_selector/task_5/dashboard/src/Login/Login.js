import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateEnableSubmit();
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateEnableSubmit();
  }

  const updateEnableSubmit = () => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };



  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.appLogin)} onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={handleEmailChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
        <input type="submit" value="Login" disabled={!enableSubmit} className={css(styles.loginButton)} />
      </form>
    </div>
  );
}

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
    border: "0.01px solid #000",
    borderRadius: "5px",
    boxShadow: "0 0 1px 1px #000",
    "@media (max-width: 900px)": {
      marginTop: "1.5%",
      width: "15%",
    },
  },
});

export default Login;
