import React, {Component} from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
    // ({displayDrawer=false, listNotifications=[]})

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}


    render() {

        // props
        const {displayDrawer, listNotifications} = this.props;
        
        return (
            <>
                <div className={css(styles.menuItem)}><p>Your notifications</p></div>
                {displayDrawer ? (
                <div className={css(styles.Notifications)}>
                    {listNotifications.length <= 0 ? (<NotificationItem value="No new notification for now" />) :
                        (
                            <>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {listNotifications.map(notification => {
                                        <NotificationItem key={notification.id} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id} />
                                    })}
                                </ul>
                                <button style={{position: "absolute", top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                                    <img className={css(styles.closeIcon)} src={closeIcon} alt="close icon" />
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
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

// Notifications.defaultProps = {
//     displayDrawer: false
// }

const styles = StyleSheet.create({
    Notifications: {
        padding: '2rem',
        border: '2px dashed #E0354B',
        position: 'relative',
        position: 'absolute',
        top: '3rem',
        right: '1.7rem',
        '@media (max-width: 900px)': {
            padding: '0',
            width: '100%',
            fontSize: '20px',
            minHeight: '100vh'
        }
    },
    closeIcon: {
        width: '16px',
    },
    menuItem: {
        position: 'absolute',
        top: '1rem',
        right: '15.5rem',
    }
});

export default Notifications;