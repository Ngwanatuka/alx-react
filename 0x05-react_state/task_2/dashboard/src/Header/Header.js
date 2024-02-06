import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

class Header extends Component {
  static contextType = AppContext;
  render() {
    const { user, logOut } = this.context;

    return (
      <React.Fragment>
        <div className={css(styles.header)}>
          <img src={logo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </div>

        {user.isLoggedIn && (
          <section className={css(styles.welcomeMessage)} id="logoutSection">
            Welcome <strong>{user.email}</strong>
            <em>
              <a href="#" onClick={logOut} className={css(styles.logoutLink)}>
                (logout)
              </a>
            </em>
          </section>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    backgroundSize: "auto",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    color: "#dc3630",
    borderBottom: "1.9px solid #dc3630",
    width: "100%",
  },
  welcomeMessage: {
    marginTop: "1rem",
    marginLeft: "10px",
    display: "flex",
    gap: "10px",
  },
  logoutLink: {
    fontStyle: "italic",
    fontSize: "0.8em",
    color: "black",
    marginRight: "10px",
    textDecoration: "none",
  },
});

export default Header;
