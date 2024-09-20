import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  // ({displayDrawer=false, listNotifications=[]})

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    // props
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(styles.Notifications)}>
            {listNotifications.length <= 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => {
                    <NotificationItem
                      key={notification.id}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={markNotificationAsRead(notification.id)}
                      id={notification.id}
                      onClick={handleDisplayDrawer}
                    />;
                  })}
                </ul>
                <button
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-label="Close"
                  onClick={handleHideDrawer}
                >
                  <img
                    className={css(styles.closeIcon)}
                    src={closeIcon}
                    alt="close icon"
                  />
                </button>
              </>
            )}
            {/* <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type='urgent' value='New resume available' />
                        <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
                    </ul> */}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

// Notifications.defaultProps = {
//     displayDrawer: false
// }

const styles = StyleSheet.create({
  Notifications: {
    padding: "2rem",
    border: "2px dashed #E0354B",
    position: "relative",
    position: "absolute",
    top: "3rem",
    right: "1.7rem",
    "@media (max-width: 900px)": {
      padding: "0",
      width: "100%",
      fontSize: "20px",
      minHeight: "100vh",
    },
  },
  closeIcon: {
    width: "16px",
  },
  menuItem: {
    position: "absolute",
    top: "1rem",
    right: "15.5rem",
    backgroundColor: "fff8f8",
    float: "right",
    ":hover": {
      animationName: [opacity, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
      animationFillMode: "forwards",
    },
  },
  hidden: {
    display: "none",
  },
});

const opacity = {
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
};

const bounce = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" },
};

export default Notifications;
