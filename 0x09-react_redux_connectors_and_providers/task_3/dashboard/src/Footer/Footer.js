import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { connect } from "react-redux";

function Footer({ user }) {

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact-us">Contact us</a>
        </p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Footer);
