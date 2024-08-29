import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = (displayDrawer=false) => {
    return (
        <>
            <div className="menuItem"><p>Your notifications</p></div>
            {displayDrawer ? (
             <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
                </ul>
                <button style={{position: "absolute", top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                    <img src={closeIcon} alt="close icon" />
                </button>
            </div>   
            )
            : ('')
            }
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

// Notifications.defaultProps = {
//     displayDrawer: false
// }

export default Notifications;