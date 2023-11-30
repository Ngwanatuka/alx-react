import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';
import AppContext from "../App/AppContext";

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    const styles = StyleSheet.create({
      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        backgroundSize: 'auto',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        color: '#dc3630',
        borderBottom: '2px solid #dc3630',
        width: '100%',
      },
    });

    return (
      <div>
        <div className={css(styles.header)}>
          <img src={logo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<span onClick={logOut}>logout</span>)
          </section>
        )}
      </div>
    );
  }
}

export default Header;
