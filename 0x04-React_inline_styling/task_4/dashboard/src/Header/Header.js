import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';

function Header() {

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
      borderBottom: '1.9px solid #dc3630',
      width: '100%',
    },
  });
  

  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
