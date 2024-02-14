import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

function Footer({ user }) {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>

      {user && user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

// export default connect(mapStateToProps)(Footer);
export default connect(mapStateToProps)(Footer);
