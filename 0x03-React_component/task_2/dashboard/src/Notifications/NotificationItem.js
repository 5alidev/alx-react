import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type, html, value, markAsRead, id}) => {
    return (
        <>
            {value ? (
                <li data-notification-type={type} onClick={markAsRead(id)}>{value}</li>
            ) : (
                html && (
                    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
                )
            )}
        </>
    );
}

NotificationItem.defaultProps = {
    type : 'default',
    markAsRead: () => {},
    id: 0
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

// NotificationItem.defaultProps = {
//     type : 'default'
// }

export default NotificationItem;