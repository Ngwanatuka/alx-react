import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

function Notifications({ displayDrawer }) {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "2.7em",
    right: "0.98em",
    background: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
    marginRight: "1px",
  };

  return (
    <div>
      <div className="menuItem">Your notifications</div>
      <div id="root-notifications" style={{ display: displayDrawer ? "block" : "none" }}>
        <button
          style={closeButtonStyle}
          aria-label="Close"
          onClick={handleButtonClick}
        >
          <img src={closeIcon} alt="close-icon" style={iconStyle} />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
