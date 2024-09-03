import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const liStyle = type === 'default' ? styles.default : styles.urgent;

    return (
      <>
        {value ? (
          <li data-notification-type={type} className={css(liStyle)} onClick={() => markAsRead(id)}>
            {value}
          </li>
        ) : (
          html && (
            <li data-notification-type={type} className={css(liStyle)} dangerouslySetInnerHTML={html}></li>
          )
        )}
      </>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red'
  }
});

export default NotificationItem;