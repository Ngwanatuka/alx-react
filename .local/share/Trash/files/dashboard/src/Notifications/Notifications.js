import React, { PureComponent } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends PureComponent {
  
  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className="flex-area">
            <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
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
                onClick={handleHideDrawer}
              >
                <img
                  className={css(styles.buttonImage)}
                  src={closeIcon}
                  alt="closeIcon"
                  width="10px"
                />
              </button>
              <p className={css(styles.NotificationsText)}>
                Here is the list of notifications
              </p>
              <ul className={css(styles.NotificationsList)}>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={() => markNotificationAsRead(id)}
                    />
                  ))
                ) : (
                  <NotificationItem value="No new Notification for now" />
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const bounceAnimation = {
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateY(0)',
  },
  '40%': {
    transform: 'translateY(-5px)',
  },
  '60%': {
    transform: 'translateY(5px)',
  },
};

const fadeInAnimation = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "0.0625rem dashed red",
    padding: "0.3125rem",
    position: "absolute",
    width: "25rem",
    right: "0.9375rem",
    top: "3.125rem",
    "@media (max-width: 900px)": {
      width: "95%",
      height: "100vw",
      backgroundColor: "white",
      border: "none",
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, .3)",
    },
  },
  NotificationsText: {
    "@media (max-width: 900px)": {
      fontSize: "20px",
    },
  },
  NotificationsList: {
    "@media (max-width: 900px)": {
      listStyle: "none",
      padding: 0,
      borderBottom: "0.0625rem solid ",
    },
  },
  buttonImage: {
    width: "10px",
  },
  '[data-notification-type="default"]': {
    color: "#0d0563",
  },
  '[data-notification-type="urgent"]': {
    color: "#e0354b",
  },

  "[data-urgent]": {
    color: "red",
  },
  menuItem: {
    textAlign: 'right',
    // position: 'fixed',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease-in-out',
    ':hover': {
      animationName: [bounceAnimation, fadeInAnimation],
      animationDuration: '0.5s',
      animationIterationCount: 3,
      opacity: 0.5,
    },
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
