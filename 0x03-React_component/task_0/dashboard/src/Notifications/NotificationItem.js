import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type='default', html, value}) => {
    return (
        <>
            {value ? (
                <li data-notification-type={type}>{value}</li>
            ) : (
                html && (
                    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
                )
            )}
        </>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    })
}

// NotificationItem.defaultProps = {
//     type : 'default'
// }

export default NotificationItem;