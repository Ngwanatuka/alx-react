import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  const itemStyle = {
    color: type === "default" ? "blue" : type === "urgent" ? "red" : "inherit",
  };

  return (
    <>
      {type && value ? (
        <li style={itemStyle} data-notification-type={type}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          style={itemStyle}
          data-urgent
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
