import React, {useContext} from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
import { AppContext } from "../App/AppContext.js";

function Footer() {
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

export default Footer;
