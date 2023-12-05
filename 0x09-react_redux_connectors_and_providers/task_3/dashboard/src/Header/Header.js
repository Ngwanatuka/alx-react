import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';
import { connect } from "react-redux";

class Header extends Component {

  render() {
    const { user, logout } = this.props;

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
            Welcome {user.email} (<span onClick={logout}>logout</span>)
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
