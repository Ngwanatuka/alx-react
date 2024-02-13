import React, { useContext } from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { AppContext } from "../App/AppContext.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.uiReducer.get("user"),
  };
};

function Footer({ user }) {
  const { user } = useContext(AppContext);
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>

      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

// export default connect(mapStateToProps)(Footer);
export default connect(mapStateToProps)(Footer);
