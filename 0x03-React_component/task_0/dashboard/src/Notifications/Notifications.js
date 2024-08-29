import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({displayDrawer=false, listNotifications=[]}) => {
    return (
        <>
            <div className="menuItem"><p>Your notifications</p></div>
            {displayDrawer ? (
             <div className='Notifications'>
                {listNotifications.length <= 0 ? (<NotificationItem value="No new notification for now" />) :
                    (
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {listNotifications.map(notification => {
                                    <NotificationItem key={notification.id} value={notification.value} html={notification.html} />
                                })}
                            </ul>
                            <button style={{position: "absolute", top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                                <img src={closeIcon} alt="close icon" />
                            </button>
                        </>
                    )
                }
                {/* <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
                </ul> */}
            </div>   
            )
            : ('')
            }
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

// Notifications.defaultProps = {
//     displayDrawer: false
// }

export default Notifications;