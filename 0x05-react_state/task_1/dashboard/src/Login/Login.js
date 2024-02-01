import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggin, setIsLoggin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggin(true);
  };
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleSubmit}>
        <div className={css(styles.appLogin)}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <input type="submit" className={css(styles.loginButton)} value="OK" />
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
    borderRadius: "5px",
    boxShadow: "0 0 1px 1px #000",
    "@media (max-width: 900px)": {
      marginTop: "1.5%",
      width: "15%",
    },
  },
});
