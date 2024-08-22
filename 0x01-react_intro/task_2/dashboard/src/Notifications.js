import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

const Notifications = () => {
    const closeHandler = () => {
        console.log('Close button has been clicked');
    }

    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button style={{position: 'absolute', top: '4px', right: '4px'}} aria-label='Close' onClick={closeHandler}>
                <img src="" alt="close icon" />
            </button>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}

export default Notifications;