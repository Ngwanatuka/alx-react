import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const BodySection = ({ title, children }) => {
  const styles = StyleSheet.create({
    bodySection: {
      margin: '40px',
      display: 'block',
    },
  });

  return (
    <div className={css(styles.bodySection)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySection;
