import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read.`);
  };

  shouldComponentUpdate(nextProps) {
    // Only update if the length of the new listNotifications is greater than the previous one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className="flex-area">
            <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.Notifications)}>
              <button
                style={{
                  color: "#3a3a3a",
                  fontWeight: "bold",
                  background: "none",
                  border: "none",
                  fontSize: "10px",
                  position: "absolute",
                  right: "2px",
                  top: "2px",
                  cursor: "pointer",
                }}
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
              >
                <img className={css(styles.buttonImage)} src={closeIcon} alt="closeIcon" width="10px" />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={() => this.markAsRead(id)}
                    />
                  ))
                ) : (
                  <NotificationItem value="No new Notification for now" />
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed red',
    padding: '10px',
    position: 'absolute',
    width: '300px',
    right: '15px',
    top: '50px',
  },
  buttonImage: {
    width: '10px',
  },
  '[data-notification-type="default"]': {
    color: '#0d0563',
  },
  '[data-notification-type="urgent"]': {
    color: '#e0354b',
  },
  
  '[data-urgent]': {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;