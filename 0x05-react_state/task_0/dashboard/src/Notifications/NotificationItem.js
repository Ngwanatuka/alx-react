import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  const itemStyle = {
    color: type === 'default' ? 'blue' : type === 'urgent' ? 'red' : 'inherit',
  };

  const handleClick = () => {
    if (markAsRead && id) {
      markAsRead(id);
    }
  };

  return (
    <>
      {type && value ? (
        <li style={itemStyle} data-notification-type={type} onClick={handleClick}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          style={itemStyle}
          data-urgent
          dangerouslySetInnerHTML={{ __html: html.__html }}
          onClick={handleClick}
        ></li>
      ) : null}
    </>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: null,
  id: null,
};

export default NotificationItem;
