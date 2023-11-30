import React, { Component } from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: props.displayDrawer || false,
      prevListLength: props.listNotifications ? props.listNotifications.length : 0,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > this.state.prevListLength;
  }

  static getDerivedStateFromProps(props, state) {
    return {
      prevListLength: props.listNotifications ? props.listNotifications.length : 0,
    };
  }

  render() {
    const { listNotifications } = this.props;

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
        <div id="root-notifications" style={{ display: this.state.displayDrawer ? "block" : "none" }}>
          <button
            style={closeButtonStyle}
            aria-label="Close"
            onClick={this.handleButtonClick}
          >
            <img src={closeIcon} alt="close-icon" style={iconStyle} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map((notification, index) => (
              <NotificationItem
                key={index}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
