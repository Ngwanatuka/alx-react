import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";


class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };

    // Binding functions for better performance
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);

  }

  handleChange(e) {
    e.persist();
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      enableSubmit: prevState.email !== "" && prevState.password !== "",
    }));
  }

  handleChangeEmail(e) {
    e.persist();
    this.handleChange(e);
  }

  handleChangePassword(e) {
    e.persist();
    this.handleChange(e);
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleSubmit}>
          <div className={css(styles.appLogin)}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChangePassword}
            />
            <input
              type="submit"
              className={css(styles.loginButton)}
              value="OK"
              disabled={!enableSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  appBody: {
    fontFamily: "Poppins, sans-serif",
    color: "#000000",
    overflow: "none",
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
