import React from 'react';


function NotificationItem( { type, html, value } ) {
    const itemStyle = {
        color: type === "default" ? "blue" : type === "urgent" ? "red" : "inherit",
      };
    
    return (
        <>
        {type && value ? <li style={itemStyle} data-notification-type={type}>{value}</li> : null}
        {html ? <li style={itemStyle} data-urgent dangerouslySetInnerHTML={{__html: html}}></li> : null}
        </>
    );
}

export default NotificationItem;