import React from 'react';

const NotificationItem = ({type, html, value}) => {
    return (
        <>
            {value ? (
                <li data-notification-type={type}>{value}</li>
            ) : (
                html && (
                    <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
                )
            )}
        </>
    );
}

export default NotificationItem;